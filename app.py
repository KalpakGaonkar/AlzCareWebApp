# Import
from __future__ import division, print_function
import sys
import os
import glob
import re
import numpy as np
import json
from flask_cors import CORS

# Keras imports
from keras.models import load_model
from keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request 
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)


# Allow
CORS(app)


# Model saved with Keras model.save()
MODEL_PATH = 'assets/models/best_weights.hdf5'

# Load your trained model
model = load_model(MODEL_PATH)

# Path where the classes are stored
CLASS_LAELS_PATH = 'assets/classes/stage_classes.json'

# Read the json
with open(CLASS_LAELS_PATH, 'r') as fr:
	json_classes = json.loads(fr.read())


@app.route('/', methods=['POST'])
def index():
    # Main page
    return 'Hello world'


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':

        # Get the file from post request
        f = request.files['file']
        
        # classes
        labels = {int(key):value for (key, value)
	          in json_classes.items()}

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = basepath
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        # print(file_path)
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        # print(preds)
        
        result = labels[preds[0]]
        
        return json.dumps(result)
    return None

def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocessing the image
    x = image.img_to_array(img)
    x = x/255
    x = np.expand_dims(x, axis=0)

    # make prediction
    preds = model.predict_classes(x)
    # print(preds)
    # return prediction 
    return preds


if __name__ == '__main__':
    app.run(debug=True)

