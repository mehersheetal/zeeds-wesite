import React from 'react';
import getFavoriteNumber from './HasuraConnection';

class FavoriteNumberView extends React.Component<any, any> {
    state = {
          number: ''
        }
    favoriteNumber = getFavoriteNumber(this.props.loginUser);
    text = this.favoriteNumber.then(value => this.setState({
        number: value
      }))
    render() {
        return (
            <div className="container-fluid" >
                <div className="row my-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="text-center">
                            <br /><br /><br /><br />
                            <h3 className="font-weight-bold">Your favorite number is </h3>
                            <h1 className="font-weight-bold">
                           {this.state.number}
                                </h1>
                                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FavoriteNumberView;