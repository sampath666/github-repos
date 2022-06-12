import './index.css'

const isActive = (id, activeId) => (id === activeId ? 'l-b2' : 'l-b1')

const LanguageFilterItem = props => {
  const {languageFiltersData, activeId, onChangeActiveId} = props

  return (
    <div className="l-d1">
      {languageFiltersData.map(each => (
        <li className="l-d2" key={each.id}>
          <button
            type="button"
            className={isActive(each.id, activeId)}
            onClick={() => onChangeActiveId(each.id)}
          >
            {each.language}
          </button>
        </li>
      ))}
    </div>
  )
}

export default LanguageFilterItem
