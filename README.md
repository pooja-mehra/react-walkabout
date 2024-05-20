# react-walkabout

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-walkabout.svg)](https://www.npmjs.com/package/react-walkabout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-demo-tour
```

## Usage

```jsx
import React, { Component } from 'react'
import Walkabout from  'react-demo-tour'

class Example extends Component {
  render() {
    return <Walkabout links ={[{linkName : '', texts : [], pointers:[], labels :? [], images :? {}, closingId :?''}]}/>
  }
}
```

## Mandatory Props:

```Links = [{linkName : '', texts : [], pointers : [], labels :? [],  images :? {}, closingId :? ''}]

    linkName: is a ID of main element (tab, menu, etc..) 
    texts: is an array of text which explains the use of element
    pointers: is an array of ID of elements to be highligted
    labels: is optional, label of the elements to highlight to add to demo dialog.
    images: is optional, images in png/gif/jpg/jpeg format
    closingId: is optional Id of an element (menu, dropdown, etc...) needed to be closed before moving to next or prevoious demo slide

```

## Optional Props:
  ```
    isFixed = false by default, which means the demo dialog will move at the position of highlited element. Set it true to keep the demo dialog in the middle of the screen.

    btnLabel = <PreviewIcon /> by default, label of demo button.

    btnBgcolor = '#3f51b5' by default , is background color of demo button.

    btnColor = 'white' by default, is color of demo button.

    variant = 'outlined' by default, it can be 'text' or 'contained'. 

    btnStyle by default is 'fab', can be set to 'button' or 'chip'.

    btnSize bt default is 'small'. can be set to 'large' or 'medium.

    titleColor = '#9c27b0' by default, which is the color of text which explains the use of element.

    animateType = 'grow' by default, other options are 'fadeIn', 'fadeOut', 'blink' or 'none'.

    labelContainerStyle ={ 
      shape:'chip' (recatngle with curve edges) by default, can be a 'circle' or 'flat' (rectangle),
      size: 'medium' by default, can be xsmall: 30, small: 50, medium: 70, large: 100, xlarge: 120,
      backgroundColor: 'white' by default, background color of container with label,
      color: '#3f51b5' by default, is label color,
      border: 'solid' by default, border of container with label,
      borderColor: 'lightGrey' by default, border color of container with label,
      } 
    is copy of highlited element placed on the demo dialog. All the fields of labelContainerStyle are optional.

    pointer = {
      style: 'circle' by default, can be set to 'square',
      size: 'small' by default, can be xsmall: 30, small: 50, medium: 70, large: 100, xlarge: 120,
      bgColor:'green' by default, color of highlighter
       }
    is highlighter which highlights the element. All the fields of pointer are optional.
  ```

## License

MIT © [pooja-mehra](https://github.com/pooja-mehra)
