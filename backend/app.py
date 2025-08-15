from flask import Flask, jsonify
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": [
    "https://projeto-pm.netlify.app/"
    "http://localhost:3000"
]}})

# Rota raiz
@app.route("/")
def home():
    return jsonify({"message": "API funcionando!"})

# Rota de teste
@app.route("/teste")
def teste():
    return jsonify({"status": "ok", "data": [1,2,3]})

if __name__ == "__main__":
    # Rodar na porta 5000
    app.run(host="0.0.0.0", port=5000, debug=True)