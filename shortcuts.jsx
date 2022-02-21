// This is a simple example Widget to get you started with Übersicht.
// For the full documentation please visit:
// https://github.com/felixhageloh/uebersicht

// You can modify this widget as you see fit, or simply delete this file to
// remove it.

// TODO:
// - make GitHub repo
// - read shortcuts from file

// the refresh frequency in milliseconds
export const refreshFrequency = 60 * 60 * 1000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  top: 20px;
  left: 20px;
  width: 500px;
  box-sizing: border-box;
  padding: 10px 10px 10px;
  color: #FFFFFF;
  font-family: Helvetica Neue;
  font-weight: 300;
  text-align: justify;
  line-height: 1;

  h1 {
    font-size: 16px;
    margin: 8px 0 8px;
  }

  h2 {
    font-size: 14px;
    margin: 0 0 0 0;
  }

  ul {
    margin: 0
  }

  li {
    font-size: 13px;
  }

  em {
    font-weight: 400;
    font-style: normal;
  }
`

import shortcuts from './shortcuts'

function Category({name, data}) {
  return (
    <div key={name}>
      <h2>{name}</h2>
      <ul>
      {
        Object.entries(data).map(([description, shortcut]) => {
          return <li><tt>{shortcut}</tt>: {description}</li>
        })
      }
      </ul>
    </div>
  )
}

export const render = () => {
  return (
    <div>
      <h1>Shortcuts</h1>
      {
        Object.entries(shortcuts).map(([category, data]) => {
          return <Category name={category} data={data} />
        })
      }
    </div>
  )
}
