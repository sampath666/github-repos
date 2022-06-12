import './index.css'

const RepositoryItem = props => {
  const {data} = props

  return (
    <div className="r-d1">
      <img src={data.avatar_url} alt={data.name} className="r-img1" />
      <h1 className="r-h1">{data.name}</h1>
      <div className="r-d2">
        <img
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="r-d3"
        />
        <p className="r-p1">{data.stars_count} stars</p>
      </div>
      <div className="r-d2">
        <img
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="r-d3"
        />
        <p className="r-p1">{data.forks_count} forks</p>
      </div>
      <div className="r-d2">
        <img
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="r-d3"
        />
        <p className="r-p1">{data.issues_count} open issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
