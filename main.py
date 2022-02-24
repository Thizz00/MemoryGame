from flask import render_template,Response,Flask 
import flask
app=Flask(__name__)
@app.route('/Loadingsite.html')
def main():
    return(render_template("Loadingsite.html"))
@app.route('/Menu.html')
def menu():
    return(render_template('Menu.html'))

@app.route('/account.html')
def account():
    return(render_template('account.html'))
@app.route('/Choose.html')
def Choose():
     return(render_template('Choose.html'))
@app.route('/game10blocks.html')
def game10blocks():
     return(render_template('game10blocks.html'))
@app.route('/game14blocks.html')
def game14blocks():
     return(render_template('game14blocks.html'))
@app.route('/game18blocks.html')
def game18blocks():
     return(render_template('game18blocks.html'))
@app.route('/game20blocks.html')
def game20blocks():
     return(render_template('game20blocks.html'))

if __name__ == '__main__':
     app.run(debug=True)