import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { GET_PLACES } from "../../sharedQueries";
import { addPlace, addPlaceVariables } from "../../types/api";
import AddPlacePresenter from "./AddPlacePresenter";
import { ADD_PLACE } from "./AddPlaceQuery";

interface IState {
  address: string;
  name: string;
  lat: number;
  lng: number;
}

class AddPlaceQuery extends Mutation<addPlace, addPlaceVariables> {}
class AddPlaceContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  constructor(props) {
    super(props);
    const { location: { state = {} } = {} } = props;
    if (state !== null && state !== undefined) {
      this.state = {
        address: state.address || "",
        lat: state.lat || 0,
        lng: state.lng || 0,
        name: "",
      };
    }
  }
  public render() {
    const { address, name, lat, lng } = this.state;
    const { history } = this.props;
    return (
      <AddPlaceQuery
        mutation={ADD_PLACE}
        refetchQueries={[{ query: GET_PLACES }]}
        variables={{ name, address, lat, lng, isFav: false }}
        onCompleted={(data) => {
          const { AddPlace } = data;
          if (AddPlace.ok) {
            toast.success("Place Added");
            setTimeout(() => {
              history.push("/places");
            }, 1500);
          } else {
            toast.error(AddPlace.error);
          }
        }}
      >
        {(addPlaceFn, { loading }) => (
          <AddPlacePresenter
            onInputChange={this.onInputChange}
            address={address}
            name={name}
            loading={loading}
            onSubmit={addPlaceFn}
            pickedAddress={lat !== 0 && lng !== 0}
          />
        )}
      </AddPlaceQuery>
    );
  }

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    } as any);
  };
}

export default AddPlaceContainer;
