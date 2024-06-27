# Cat-Dog Classifier Using Docker

This repository contains a machine learning project that classifies images of cats and dogs. The project is implemented using Flask and TensorFlow, and it is containerized using Docker for easy deployment and scalability.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

The Cat-Dog Classifier is a web application that allows users to upload an image and get a prediction on whether the image is of a cat or a dog. The application is built with Flask and uses a pre-trained TensorFlow model to perform the classification. Docker is used to containerize the application, making it easy to deploy and run in any environment.

## Features

- Image upload functionality
- Real-time classification of cat and dog images
- Dockerized for easy deployment
- Scalable and portable

## Architecture

- **Frontend**: A simple HTML form for image upload
- **Backend**: Flask web server
- **Model**: Pre-trained TensorFlow model for image classification
- **Containerization**: Docker for packaging the application

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker installed on your machine
- Basic knowledge of Docker and Flask
- A GitHub account to clone the repository

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dhars1n1/cat-dog-classifier-using-docker.git
    cd cat-dog-classifier-using-docker
    ```

2. Build the Docker image:

    ```bash
    docker build -t cat-dog-classifier .
    ```

3. Run the Docker container:

    ```bash
    docker run -p 5000:5000 cat-dog-classifier
    ```

The application will be available at `http://localhost:5000`.

## Usage

1. Open your web browser and navigate to `http://localhost:5000`.
2. Upload an image of a cat or a dog using the provided form.
3. Click the "Submit" button.
4. The application will display the prediction result.



## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


docker hub link: [https://hub.docker.com/r/dhars1n1/flask_docker]
model link: [https://huggingface.co/spaces/Sa-m/Dogs-vs-Cats/blob/main/best_model.h5]

https://github.com/dhars1n1/cat-dog-classifier-using-docker/assets/161904561/70178a96-e0d1-4177-8e05-d0a7cf312f41

