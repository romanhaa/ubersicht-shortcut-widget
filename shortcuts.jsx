// --------------- CUSTOMIZE ME ---------------
// the following dimensions are specified in pixels
const WIDTH = 400 // width of the widget
const TOP = 10 // top margin
const LEFT = 20 // left margin
const REFRESH_FREQUENCY = 3600 // widget refresh frequency in seconds
// --------------------------------------------

// the refresh frequency in milliseconds
export const refreshFrequency = REFRESH_FREQUENCY * 1000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  top: ${TOP}px;
  left: ${LEFT}px;
  width: ${WIDTH}px;
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
    margin-bottom: 1px;
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
