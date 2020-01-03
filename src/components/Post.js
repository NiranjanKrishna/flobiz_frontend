import React from "react";
import { Link } from "react-router-dom";
import faker from "Faker";

export const Show = () => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};
export const Profile = () => {
  return (
    <div>
      <div className="card px-md-3">
        <h3>Profile</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Titles</label>
            <img
              src="{faker.image.avatar()}"
              class="circular mx-auto d-block"
              alt="..."
            ></img>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Image URL</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Image URL"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
export default function Post() {
  return (
    <div>
      <div className="card px-md-3">
        <h3>Create New Blog</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Titles</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Image URL</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Image URL"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
