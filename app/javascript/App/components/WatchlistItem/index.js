import React from 'react'
import ListedData from './ListedData'
import ListedInfo from './ListedInfo'
import IcoData from './IcoData'
import IcoInfo from './IcoInfo'
import Title from './Title'
import Actions from './Actions'

export default props => {
  const { coin, editing } = props
  return (
    <div className="bright-gray db bg-white shadow-s1 ba b--athens-darker mb3 tc tl-ns">
      <div className="pa3">
        <div className="row bottom-xs">
          <div className="col-xs-12 col-sm-7 col-md-12 col-lg-7">
            <Title {...props} />
          </div>
          <div className="col-xs-12 col-sm-5 col-md-12 col-lg-5 tr mt2 mt0-ns">
            {editing ? (
              <Actions {...props} />
            ) : (
              <div className="f4 fw9">
                {coin.category === 'listed' ? (
                  <ListedInfo {...props} />
                ) : (
                  <IcoInfo {...props} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {!editing && (
        <div className="bt b--athens-dark pa3 pt3">
          {coin.category === 'listed' ? (
            <ListedData {...props} />
          ) : (
            <IcoData {...props} />
          )}
        </div>
      )}
    </div>
  )
}