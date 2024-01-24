# Microfrontend with sigle-spa

It's a test using the microfrontend concepts with single-spa.

1. First of all clone the project. After do it, install dependencies:

```
cd app1 && npm i
cd app2 && npm i
cd container-application && npm i
cd footer && npm i
cd navbar && npm i
```

2. Run the applications with the correct ports. In root folder, execute the commands bellow:

```
cd container-application && npm start -- --port 9000
cd navbar && npm start -- --port 8500
cd app1 && npm start -- --port 8080
cd app2 && npm start -- --port 8888
cd footer && npm start -- --port 8082
```