const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const { loadImage } = require('canvas');
const predict = require('./predict');

// PUT YOUR MODEL.JSON, METADATA.JSON & WEIGHTS.BIN in the Model folder!
const DEFAULT_MODEL_LOCATION = `file:///${__dirname}/model/model.json`;

let model;

(async function main() {
  try {
    // Load your image
    const image = await loadImage(path.resolve(__dirname, './YOUR_IMAGE.jpg'));

    // Load the trained Teachable Machine model
    model = await tf.loadLayersModel(DEFAULT_MODEL_LOCATION);
    // model.summary();

    // Get the predictions for an image
    const results = await predict(image, model);

    // Get the top result's name
    const topResult = results[0].className;
    console.log('Prediction:', topResult);
  } catch (e) {
    console.error(e);
  }
})();
