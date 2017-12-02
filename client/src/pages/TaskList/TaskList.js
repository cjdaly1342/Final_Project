import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "../../components/SearchBar/search_bar";
import Jumbotron from "../../components/Jumbotron";
import VideoDetail from '../../components/Videos/video_detail';
import VideoList from "../../components/Videos/video_list";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const API_KEY = 'AIzaSyD9Nxn3x_MvGKLOuuEXS9X7qHgL5pjVzcc';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.state = {
      tasklist: []
    };

    this.videoSearch('Cummins ISX15 CM2350 Injector Performance Test');
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.loadTaskLists();
  }

  loadTaskLists = (term) => {
    API.getTaskLists(term)
      .then(res => this.setState({ taskList: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)

    return (
      <Container fluid>
        <Jumbotron>
          <h1>Stuff I Used to Know</h1>
          <p>A Knowledge Base that Contains all of the stuff I used to Know how to do!</p>
        </Jumbotron>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Share Your Knowledge!</h2>
              <form>
                <Input name="title" placeholder="Title (required)" />
                <TextArea name="step" placeholder="Task Steps" />
                <FormBtn>Submit Task</FormBtn>
              </form>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              {this.state.tasklist.length ? (
                <List>
                  {this.state.tasklist.map(taskList => (
                    <ListItem key={taskList.title}>
                      <a href={"/taskLists" + taskList.title}>
                        <strong>
                          {taskList.title}
                        </strong>
                      </a>
                      <DeleteBtn />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <p><h3>Cummins ISX15 CM2350 Injector Performance Test</h3>
                   <p>1. Chock Wheels</p>
                   <p>2. Connect to Cummins INSITE</p>
                   <p>3. Start Engine</p>
                   <p>4. Select IPT from ECM Diagnostics & Tests</p>
                   <p>5. IPT will test 3 points of each injector</p>
                   <p>6. If one of the test points fails, that injector must be replaced</p>
                   <p>7. Stop Engine when test is completed</p>   
                </p>
              )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TaskList;
