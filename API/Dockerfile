FROM golang:1.22

WORKDIR /app

COPY . /app

RUN go build -o ./API/main .

EXPOSE 8080

CMD ["./main"]
