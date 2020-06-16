import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Form, Button } from "react-bootstrap";

import { fetchQueue, postQueue } from "./actions";

function QueueView({ fetchQueue, postQueue, queue }) {
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchQueue();
  }, []);

  function handleClick() {
    postQueue({ path: path, description: description });
  }

  return (
    <div>
      <h3>Queue</h3>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Path</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {queue.map(entry => {
            return (
              <tr key={entry.qEntryId}>
                <td sm={2}>{entry.qEntryId}</td>
                <td sm={2}>{entry.path}</td>
                <td sm={2}>{entry.description}</td>
                <td sm={2}>{entry.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Form>
        <Form.Group controlId="formPath">
          <Form.Label>Path</Form.Label>
          <Form.Control
            type="text"
            value={path}
            onChange={e => setPath(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter path to be explored
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleClick} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    queue: state.queue
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQueue: () => dispatch(fetchQueue()),
    postQueue: params => dispatch(postQueue(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueueView);
