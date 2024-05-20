import React, { Fragment, useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import PaperComponent from './draggablecomponent'
import { animated, useSpring } from '@react-spring/web'
import Pointer from './pointer'
import PreviewIcon from '@mui/icons-material/Preview'
import Fab from '@mui/material/Fab'

export default function Walkabout(props) {
  const {
    isFixed = false,
    btnLabel = <PreviewIcon />,
    btnBgcolor = '#3f51b5',
    btnColor = 'white',
    variant = 'text',
    btnStyle = 'fab',
    btnSize = 'small',
    links,
    titleColor = '#9c27b0',
    animateType = 'grow',
    labelContainerStyle,
    pointer
  } = props
  const [open, setOpen] = useState(false)
  const sizes = { xsmall: 30, small: 50, medium: 70, large: 100, xlarge: 120 }
  const [frame, setFrame] = useState(0)
  const [link, setLink] = useState(0)
  const [text, setText] = useState(0)
  const [label, setLabel] = useState(0)
  const [demo, setDemo] = useState(null)

  useEffect(() => {
    if (link <= links.length - 1) {
      if (frame <= links[link].texts.length - 1) {
        changeTab(frame, link)
      } else {
        setLink(link + 1)
        setFrame(0)
      }
    } else {
      setFrame(0)
      setLink(0)
    }
  }, [frame, open, link])

  const changeTab = async (frame, link) => {
    if (frame === 0 || frame === links[link].texts.length - 1) {
      document.getElementById(links[link].linkName) &&
        (await document.getElementById(links[link].linkName).click())
    }
    setLabel(links[link].labels[frame])
    setText(links[link].texts[frame])
    const element = document.getElementById(links[link].pointers[frame])
    element && setDemo(element.getBoundingClientRect())
  }
  const handleClose = () => {
    setOpen(false)
    setDemo(null)
  }

  const next = () => {
    if (frame < links[link].texts.length - 1) {
      setFrame(frame + 1)
    } else {
      links[link].closingId &&
        document.getElementById(links[link].closingId) &&
        document.getElementById(links[link].closingId).click()
      setLink(link + 1)
      setFrame(0)
    }
  }

  const back = () => {
    if (frame > 0) {
      setFrame(frame - 1)
    } else {
      links[link].closingId &&
        document.getElementById(links[link].closingId) &&
        document.getElementById(links[link].closingId).click()
      if (link > 0) {
        setLink(link - 1)
        setFrame(links[link - 1].texts.length - 1)
      } else {
        setLink(links.length - 1)
        setFrame(links[links.length - 1].texts.length - 1)
      }
    }
  }

  const setAnime = (animateType) => {
    switch (animateType) {
      case 'fadeIn':
        return {
          from: { opacity: 0, scale: 0.1 },
          to: [
            { opacity: 0.2, scale: 0.3 },
            { opacity: 0.4, scale: 0.5 },
            { opacity: 0.6, scale: 0.7 },
            { opacity: 1, scale: 0.8 }
          ],
          delay: 500
        }
      case 'fadeOut':
        return {
          from: { opacity: 1, scale: 0.8 },
          to: [
            { opacity: 0.6, scale: 0.6 },
            { opacity: 0.4, scale: 0.4 },
            { opacity: 0.2, scale: 0.2 },
            { opacity: 1, scale: 0.8 }
          ],
          delay: 500
        }
      case 'blink':
        return {
          from: { opacity: 1, scale: 0.8 },
          to: [
            { opacity: 0.5 },
            { opacity: 0 },
            { opacity: 0.5 },
            { opacity: 1 }
          ],
          delay: 200
        }
      case 'none':
        return {
          from: { opacity: 1, scale: 0.8 }
        }
      default:
        return {
          from: { opacity: 1, scale: 0.2 },
          to: [
            { opacity: 1, scale: 0.4 },
            { opacity: 1, scale: 0.6 },
            { opacity: 1, scale: 0.8 },
            { opacity: 1, scale: 0.8 }
          ],
          delay: 200
        }
    }
  }

  const anime = useSpring(setAnime(animateType))

  const LabelContainer = (props) => {
    return (
      <animated.div
        style={setLabelContainer(
          labelContainerStyle && labelContainerStyle.shape
            ? labelContainerStyle.shape
            : 'default'
        )}
      >
        <div style={{ position: 'relative', zIndex: 1 }} id='label'>
          {props.label}
        </div>
        <div
          style={{
            position: 'absolute',
            zIndex: 2
          }}
        >
          <Pointer pointer={pointer} sizes={sizes} />
        </div>
      </animated.div>
    )
  }

  const setLabelContainer = (shape) => {
    const labelStyle = {
      width: 'fit-content',
      height: 'fit-content',
      borderRadius:
        labelContainerStyle &&
        labelContainerStyle.size &&
        sizes[labelContainerStyle.size]
          ? sizes[labelContainerStyle.size]
          : sizes.medium,
      color: '#3f51b5',
      backgroundColor: 'white',
      border: 'solid',
      borderColor: 'lightGrey',
      margin: 'auto',
      padding: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
      ...labelContainerStyle
    }
    switch (shape) {
      case 'circle':
        return {
          width:
            labelContainerStyle &&
            labelContainerStyle.size &&
            sizes[labelContainerStyle.size]
              ? sizes[labelContainerStyle.size]
              : sizes.medium,
          height:
            labelContainerStyle &&
            labelContainerStyle.size &&
            sizes[labelContainerStyle.size]
              ? sizes[labelContainerStyle.size]
              : sizes.medium,
          borderRadius:
            labelContainerStyle &&
            labelContainerStyle.size &&
            sizes[labelContainerStyle.size]
              ? sizes[labelContainerStyle.size]
              : sizes.medium,
          border: 'solid',
          margin: 'auto',
          display: 'flex',
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          ...labelStyle,
          ...labelContainerStyle
        }

      case 'flat':
        return {
          width: 'fit-content',
          height: 'fit-content',
          padding: 5,
          border: 'solid',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          ...labelStyle,
          ...labelContainerStyle
        }
      default:
        return {
          ...labelStyle,
          ...labelContainerStyle
        }
    }
  }

  const demoStart = async () => {
    setOpen(true)
  }

  const SetBtnType = () => {
    switch (btnStyle) {
      case 'button':
        return (
          <Button
            size={btnSize}
            variant={variant}
            style={{ backgroundColor: btnBgcolor, color: btnColor }}
            onClick={demoStart}
          >
            {btnLabel}
          </Button>
        )
      case 'chip':
        return (
          <Chip
            size={btnSize}
            variant={variant}
            style={{
              backgroundColor: btnBgcolor,
              color: btnColor
            }}
            onClick={demoStart}
            label={btnLabel}
          />
        )
      default:
        return (
          <Fab
            variant={variant}
            size={btnSize}
            style={{
              backgroundColor: btnBgcolor,
              color: btnColor
            }}
            onClick={demoStart}
          >
            {btnLabel}
          </Fab>
        )
    }
  }

  return (
    <Fragment>
      {demo && open && (
        <div
          style={{
            position: 'absolute',
            left: demo.x + demo.width / 2,
            top: demo.y,
            zIndex: 2
          }}
        >
          <Pointer
            width={demo.width / 2}
            height={demo.height / 2}
            pointer={pointer}
            sizes={sizes}
          />
        </div>
      )}
      <SetBtnType />
      {links && (
        <Dialog
          style={{
            position: 'absolute',
            left: !isFixed && demo ? demo.x : '40vw',
            top: !isFixed && demo ? demo.y + demo.height : '40vh',
            height: 'auto',
            maxHeight: 'fit-content',
            width: 'auto',
            maxWidth: 'fit-content',
            overflow: 'scroll',
            zIndex: 12,
            display: 'flex',
            flexShrink: true
          }}
          open={open}
          onClose={() => setOpen(false)}
          PaperComponent={PaperComponent}
          hideBackdrop
          id='demo'
        >
          <animated.div style={{ ...anime }}>
            <DialogTitle
              style={{
                cursor: 'move',
                padding: 0,
                margin: 0,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              id='draggable-dialog-title'
            >
              <animated.div
                style={{
                  padding: 0,
                  color: titleColor,
                  fontWeight: 'bold'
                }}
              >
                <p
                  style={{
                    textAlign: 'center',
                    margin: 'auto',
                    textTransform: 'uppercase'
                  }}
                >
                  {text}
                </p>
              </animated.div>
              {label && label !== '' && <LabelContainer label={label} />}
            </DialogTitle>
            <DialogContent style={{ padding: 5, margin: 'auto' }}>
              {link <= links.length - 1 && links[link].images[frame] && (
                <img
                  alt='shots'
                  src={'../walkabout-images/' + links[link].images[frame]}
                  width='100%'
                  height='150px'
                />
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={back}>Back</Button>
              <Button onClick={handleClose}>Close</Button>
              {link <= links.length - 1 &&
                frame <= links[link].texts.length - 1 && (
                  <Button onClick={next}>Next</Button>
                )}
            </DialogActions>
          </animated.div>
        </Dialog>
      )}
    </Fragment>
  )
}
