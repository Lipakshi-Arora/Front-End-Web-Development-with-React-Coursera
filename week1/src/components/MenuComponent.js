import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = 
        {
            selectedDish: null
        }
        console.log('Menu Component constructor is called');
    }
    componentDidMount(){
      console.log('Menu Component componentDidMount is called');
    }
    onDishSelect(dish) 
    {
        this.setState({ selectedDish: dish});
    }

    render() 
    {
        const menu = this.props.dishes.map((dish) => 
            {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* {this.renderDish(this.state.selectedDish)} */}
                <DishdetailComponent dish ={this.state.selectedDish}></ DishdetailComponent>
            </div>
        );
    }
}

export default Menu;