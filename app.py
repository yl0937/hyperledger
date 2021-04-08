from flask import Flask,request,render_template,abort
import json
from jinja2 import TemplateNotFound

app = Flask(__name__,template_folder='templates')


@app.route('/login', methods=['GET', 'POST'])
def tiki():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)


@app.route('/', methods=['GET', 'POST'])
def login():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)
#log_id = request.json['user_id']
#log_pwd = request.json['password']
#if log_id == 'yl0937':
#if log_pwd == "001231":
#    print("로그인 성공")
#else:
#print("로그인오류")


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)