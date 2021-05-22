import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { Slack } from 'grommet-icons';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <h2>Discord</h2>
              <p>
                We've moved to Discord! <a href="https://discord.gg/AWcEfYKjff">Join our Discord here!</a>
              </p>
              <h2>Please contact us through our social media channels found in the footer below.</h2>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}