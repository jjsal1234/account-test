from flask import Flask, redirect, url_for
from flask_dance.contrib.github import make_github_blueprint, github

app = Flask(__name__)
app.secret_key = 'mysecretkey'  # Change this to a random, secure key in production

# Set up GitHub OAuth
github_bp = make_github_blueprint(client_id='your-github-client-id', client_secret='your-github-client-secret')
app.register_blueprint(github_bp, url_prefix='/github_login')

@app.route('/')
def home():
    return 'Welcome to the home page!'

@app.route('/login')
def login():
    return redirect(url_for('github.login'))

@app.route('/logout')
def logout():
    return redirect(url_for('github.logout'))

@app.route('/dashboard')
def dashboard():
    if not github.authorized:
        return redirect(url_for('github.login'))

    resp = github.get('/user')
    assert resp.ok, resp.text

    return 'Logged in as: ' + resp.json()['login']

if __name__ == '__main__':
    app.run(debug=True)
