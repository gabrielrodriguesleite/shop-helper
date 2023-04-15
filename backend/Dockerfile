FROM golang:1.18-alpine AS build_base

RUN apk add --no-cache git

# Set the Current Working Directory inside the container
WORKDIR /tmp/go-app

# Populate module cache based on go.mod and go.sum files
COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

# Run Unit Tests
# RUN CGO=ENABLED=0 go test -v

# Build the app
RUN go build -o ./out/go-app .

# Smaller image
FROM alpine:3.9

RUN apk add ca-certificates

COPY --from=build_base /tmp/go-app/out/go-app /app/go-app

EXPOSE 5000

# Run binary from `go install`
CMD ["/app/go-app"]