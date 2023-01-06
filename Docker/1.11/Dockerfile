FROM openjdk:11
WORKDIR /usr/src/myapp
EXPOSE 8080
RUN ./mvnw package
CMD ['java', '-jar', './target/docker-example-1.1.3.jar']