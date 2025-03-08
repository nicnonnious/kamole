from flask import Flask, render_template, request, redirect, url_for
from supabase import create_client, Client

app = Flask(__name__)

# Supabase setup
SUPABASE_URL = 'https://akmslpslzlmqurdjwmtg.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbXNscHNsemxtcXVyZGp3bXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMjA1MTgsImV4cCI6MjA1NjY5NjUxOH0.EHHHVchQwUBIZtO6y9N78HnoUlm4i-rZwqez-1jj-74'
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Get form data
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    service = request.form['service']
    message = request.form['message']
    address = request.form['address']

    # Save to Supabase
    data = supabase.table('submissions').insert({
        'name': name,
        'email': email,
        'phone': phone,
        'service': service,
        'message': message,
        'address': address
    }).execute()

    # Redirect to a thank-you page or show a message
    return redirect(url_for('thank_you'))

@app.route('/thank-you')
def thank_you():
    return "Thank you! Your request has been submitted."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)