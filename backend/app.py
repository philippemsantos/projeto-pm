from flask import Flask

app = Flask(__name__)

# Rota raiz
@app.route("/")
def home():
    return "API funcionando!"

# Rota de teste
@app.route("/teste")
def teste():
    return "Rota teste funcionando!"

if __name__ == "__main__":
    # Rodar na porta 5000
    app.run(host="0.0.0.0", port=5000, debug=True)