export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };

  // const self = this;
  // this.addNeighborhood = function add(newNeighborhood) {
  //   self.sanFranciscoNeighborhoods.push(newNeighborhood);
  //   return self.sanFranciscoNeighborhoods;
  // };
}
