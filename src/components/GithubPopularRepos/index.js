import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const stateConstants = {load: 'Loading', suc: 'SUCCESFULL', fail: 'FAILURE'}

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeId: 'ALL', list: [], status: stateConstants.fail}

  componentDidMount() {
    this.updateList()
  }

  updateList = async () => {
    const {activeId} = this.state
    this.setState({status: stateConstants.load})
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      this.setState({list: data.popular_repos, status: stateConstants.suc})
    } else {
      this.setState({status: stateConstants.fail})
    }
  }

  onChangeActiveId = id => {
    this.setState({activeId: id}, this.updateList)
  }

  onRenderSuccess = () => {
    const {list} = this.state

    return (
      <div className="g-d2">
        {list.map(each => (
          <RepositoryItem data={each} key={each.id} />
        ))}
      </div>
    )
  }

  onRenderLoading = () => (
    <div className="g-d5" testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onRenderFailure = () => (
    <div className="g-d4">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="g-img1"
      />
    </div>
  )

  onRender = () => {
    const {status} = this.state
    switch (status) {
      case stateConstants.load:
        return this.onRenderLoading()
      case stateConstants.suc:
        return this.onRenderSuccess()
      default:
        return this.onRenderFailure()
    }
  }

  render() {
    const {activeId, list} = this.state
    console.log(list)
    return (
      <div className="g-d1">
        <h1 className="g-h1">Popular</h1>
        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          activeId={activeId}
          onChangeActiveId={this.onChangeActiveId}
        />
        {this.onRender()}
      </div>
    )
  }
}

export default GithubPopularRepos
