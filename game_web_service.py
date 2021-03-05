from flask import Flask, request, send_file, render_template, redirect, url_for, session, escape
import json

app = Flask(__name__)

# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b'_5#y2L"F4Q8zaa\n\xec]/'

@app.route('/')
def root():
    if 'email' in session:
        return render_template('index.html', email=session['email'])
    print('跳转到登录页面')
    return redirect(url_for('login'))


@app.route('/login/', methods=['GET', 'POST'])
def login():
    print(request.method)
    if request.method == 'GET':
        return render_template('login.html')
    session['email'] = request.form['email']
    return redirect('/')


@app.route('/signup/', methods=['GET', 'POST'])
def signup():
    if request.method == 'GET':
        return render_template('signup.html')
    pass

@app.route('/signout/', methods=['GET'])
def signout():
    del session['email']
    return redirect('/')


@app.route('/2048/')
def game_2048():
    return '欢迎来到2048游戏'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, debug=True)
