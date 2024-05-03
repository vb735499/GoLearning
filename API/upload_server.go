package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"slices"
	"strings"

	"github.com/gin-gonic/gin"
)

type UploadServer struct {
	SEngine *gin.Engine
}

func removeFile(filePath string) {
	e := os.Remove(filePath)
	if e != nil {
		log.Fatal(e)
	}
}

func toJson(_files map[string][]string) []byte {
	out := []map[string]string{}

	for key, files := range _files {
		for _, filename := range files {
			title := strings.Split(filename, ".")[0]
			tmp := map[string]string{
				"username": key,
				"date":     "123",
				"title":    title,
				"image":    filename,
			}
			out = append(out, tmp)
		}
	}
	out_b, _ := json.Marshal(out)
	return out_b
}

func createUploadServer() UploadServer {
	bucketName := "pic-image"
	bucketClient := getClient()

	validation := []string{"jpg", "png", "jpeg", "gif"}

	router := UploadServer{
		SEngine: gin.Default(),
	}

	router.SEngine.Static("/imgs", "./imgs")
	router.SEngine.LoadHTMLGlob("./test/*")

	// Set a lower memory limit for multipart forms (default is 32 MiB)
	router.SEngine.MaxMultipartMemory = 8 << 20 // 8 MiB

	router.SEngine.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "test.html", gin.H{})
	})

	router.SEngine.GET("/query", func(c *gin.Context) {
		_files := bucketClient.QueryAll(bucketName)
		c.JSON(200, toJson(_files))
	})

	router.SEngine.POST("/upload", func(c *gin.Context) {
		form, _ := c.MultipartForm()
		files := form.File["upload[]"]
		memberId := form.Value["memberId"][0]
		uploadInfo := ""
		uploadSucces := 0

		for _, file := range files {
			fileType := strings.Split(file.Filename, ".")[1]
			if !slices.Contains(validation, fileType) {
				uploadInfo += fmt.Sprintf("'%s' are not vaild image types.\n", file.Filename)
				log.Println(file.Filename, "are not valid image types.")
				continue
			}
			log.Println(file.Filename)
			uploadSucces += 1

			filePath := "./imgs/" + memberId + "/" + file.Filename

			// Upload the file to specific dst.
			c.SaveUploadedFile(file, filePath)

			// Upload to the AWS S3 bucket.
			bucketClient.UploadFile(bucketName, memberId, filePath)

			// Remove file from web server.
			removeFile(filePath)
		}
		uploadInfo += fmt.Sprintf("'%d' files uploaded!\n", uploadSucces)
		c.String(http.StatusOK, uploadInfo)
	})
	return router
}
