import { Component } from 'react'
import Loader from "react-loader-spinner";
import { search } from './components/Api';
import Searchbar from './components/Searchbar'
import ImageGallery from "./components/ImageGallery";
import LoadMoreButton from "./components/Button";
import Modal from "./components/Modal";
import { ToastContainer} from "react-toastify";
import './App.css';

export default class App extends Component {
  state = {
    images: [],
    showModal: false,
    query: "",
    page: 1,
    loading: false,
    imageId: null,
  };

  handleQChange = (query) => {
    this.setState({
      loading: true,
    });
    search(query, 1).then((response) =>
      this.setState({
        images: response.data.hits,
        page: 2,
        query,
        loading: false,
      })
    );
  };

  handleLoadMore = () => {
    this.setState({
      loading: true,
    });
    search(this.state.query, this.state.page).then((response) => {
      this.setState({
        images: [...this.state.images, ...response.data.hits],
        page: this.state.page + 1,
        loading: false,
      });

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  openModal = (imageId) => () => {
    this.setState({
      showModal: true,
      imageId,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      imageId: null,
    });
  };

  render() {
    const { images, showModal, imageId } = this.state;
    const image = images.find((image) => image.id === imageId);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Image finder</h1>
        </header>
        <ToastContainer autoClose={3000} />
        {showModal && <Modal onClose={this.closeModal} image={image}></Modal>}
        <Searchbar onSubmit={this.handleQChange} />
        <ImageGallery images={this.state.images} onClick={this.openModal} />
        {this.state.loading === true && (
          <div className="loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        )}
        {this.state.images.length !== 0 && (
          <LoadMoreButton
            handleLoadMore={this.handleLoadMore}
            disabled={this.state.loading}
          />
        )}
      </div>
    );
  }
}