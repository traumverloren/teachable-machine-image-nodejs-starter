# Teachable Machine image prediction in Node.js starter

Basic starter setup for getting an image classification model trained on [Teachable Machine](https://teachablemachine.withgoogle.com/train) to classify an image in Node.js.

This is only a bit of starter code to help others get started that want to use their Teachable Machine trained model in a nodejs project. I found it challenging to figure out how to use my trained model in nodejs, so I hope this helps! <3

## 🏫 Train your image classification model:

- Go to [https://teachablemachine.withgoogle.com/train](https://teachablemachine.withgoogle.com/train).
- Train model and export the model files.

## ✨ Setup:

- `npm install`
- Add your Teachable Machine model files to the `model` folder. This should include `model.json`, `metadata.json`, & `weights.bin`.
- Add the image file you want to classify to the project folder.
- Run `node app.js` or `npm run predict` & the result will be logged.
