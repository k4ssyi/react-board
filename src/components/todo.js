import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    inputData: ""
  }

  setInputData = (event) => {
    this.setState({ inputData: event.target.value });
  }

  handleClickPost = () => {
    let data = localStorage.getItem("data");
    data = !data ? {} : JSON.parse(data);
    let increment = localStorage.getItem("increment");
    increment = !increment ? 1 : Number(increment) + 1;
    data[increment] = this.state.inputData
    // 出力したい → {1: data, 2: test, etc...}
    let setjson = JSON.stringify(data); // String型にして保存
    localStorage.setItem('increment', increment);
    localStorage.setItem('data', setjson);

    this.setState({ inputData: "" });

    this.forceUpdate();
  }

  handleClickDelete = (e) => {
    const dataId = e.currentTarget.getAttribute('data-id');
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    delete data[dataId];
    let setjson = JSON.stringify(data); // String型にして保存
    localStorage.setItem('data', setjson);
    this.forceUpdate();
  }

  render_post() {
    return (
      <div><p>{localStorage.getItem('data')}</p></div>
    )
  }

  // renderが走る時stateが変わる時,component読んだ時
  render() {
    let storage_data = localStorage.getItem("data");
    storage_data = !storage_data ? {} : JSON.parse(storage_data);
    const display_array = Object.keys(storage_data).map((key, index) => {
      //配列についか
      return (
        <div key={index}>
          <p>{storage_data[key]}</p>
          <button type="button" data-id={key} onClick={this.handleClickDelete}>削除</button>
        </div>
      );
    });
    return (
      <div>
        <p>Todo</p>
        <textarea onChange={this.setInputData} value={this.state.inputData} />
        <button type="button" onClick={this.handleClickPost}>投稿</button>
        {display_array}
      </div >
    );
  }
}
