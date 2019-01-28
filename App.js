import React, {Component, Fragment} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import Markdown from 'react-native-markdown-renderer'
import {styles, mdStyle} from './style.js'
import settings from './settings.json'
import tree from './finaltree.json'

function replaceVariables (node) {
  const str = settings.primarycontact || ''
  node.content = node.content.replace(/\$CONTACTPERSOON/g, str)
  //if (node.options) {
    //for (const i of node.options) replaceVariables(i)
  //}
}
//replaceVariables(tree)

export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      node: tree[0],
      history: [tree],
      json: tree,
    }

    this.goToNode = this.goToNode.bind(this)
    this.goBack = this.goBack.bind(this)
  }
  findNode (id){
    let {node, history, json} = this.state;
    return json.filter(
      function(data){
        return data.id == id;
      }
    )[0]
  }
  goToNode (newNode) {
    let {node, history,json} = this.state
    history = history.slice()
    newNode = this.findNode(newNode)
    // history[history.indexOf(node) + 1] = newNode
    this.setState({node: newNode, history})
  }

  goBack () {
    const {node, history, json} = this.state
    const i = history.indexOf(node)
    if (i && i > 0) {
      this.goToNode(history[i - 1])
    }
  }

  render () {
    const {node, history, json} = this.state
    const buttons = []
    //console.log(node.parent)
    var backButton = null;
    if(node.parent !== null){
      backButton =
      <Button
        style={styles.button}
        title="Terug"
        onPress={() => this.goToNode(node.parent)}
      />
    }
    if (node.children && node.children instanceof Array) {
      for (const i of node.children) {
        let child = this.findNode(i);
        buttons.push(
          <Button
            style={styles.button}
            title={child.title}
            onPress={() => this.goToNode(child.id)}
            key={child.id}
          />
        )
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.messageArea}>
          <Markdown style={mdStyle}>
            {node.content || ''}
          </Markdown>
        </View>
        <View style={styles.buttonGroup}>
          {buttons}
        </View>
        <View style={styles.buttonGroup}>
          {backButton}
        </View>
      </View>
    )
  }
}
