/**
 * @flow
 */

import React, { Component, Fragment } from 'react'
import type { Node } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'

import TermSelect from './TermSelect'

type Props = {
  classes: Object,
  hasPreview: boolean,
  hasQuestion: boolean,
  loadOptions: Function,
  onSelectTerm: Function,
  onChooseQuestion: Function,
  onSubmit: Function,
  previewSlot: Node,
  chosenSlot: Node
}

type State = *

class NewComponent extends Component<Props, State> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    hasPreview: PropTypes.bool,
    hasQuestion: PropTypes.bool,
    loadOptions: PropTypes.func.isRequired,
    onSelectTerm: PropTypes.func.isRequired,
    onChooseQuestion: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    previewSlot: PropTypes.node.isRequired,
    chosenSlot: PropTypes.node.isRequired
  }

  render() {
    const {
      classes,
      hasPreview,
      hasQuestion,
      loadOptions,
      previewSlot,
      chosenSlot,
      onSelectTerm,
      onChooseQuestion,
      onSubmit
    }: Props = this.props

    return (
      <Fragment>
        {chosenSlot}
        {previewSlot}
        <Grid container className={classes.termSelectZone}>
          <Grid item lg={8} xs={12}>
            <TermSelect
              loadOptions={loadOptions}
              onSelect={onSelectTerm}
            />
          </Grid>
          <Grid item lg={2} xs={6} className={classes.buttonContainer}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              disabled={!hasPreview}
              className={classes.button}
              onClick={onChooseQuestion}
            >
              Add To PaperSheet
              <AddToQueueIcon className={classes.rightIcon} />
            </Button>
          </Grid>
          <Grid item lg={2} xs={6} className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disabled={!hasQuestion}
              className={classes.button}
              onClick={onSubmit}
            >
              Create PaperSheet
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const styles: Function = (theme): Object => ({
  buttonContainer: {
    textAlign: 'center'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  termSelectZone: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-around',
    marginTop: 40
  }
})

export default withStyles(styles)(NewComponent)