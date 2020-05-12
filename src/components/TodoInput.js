import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body mt-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div
                className={
                  editItem
                    ? 'input-group-text bg-success text-white'
                    : 'input-group-text bg-primary text-white'
                }
              >
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              name=""
              placeholder="add todo item"
              id=""
              value={item}
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? 'btn btn-block btn-success mt-3'
                : 'btn btn-block btn-primary mt-3'
            }
          >
            {editItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </div>
    );
  }
}
