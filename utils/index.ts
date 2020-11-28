// TODO: get proper friend type
export const formatFriendsActivity = (friends: any) => {
  if (friends && friends.length) {
    switch (friends.length) {
      case 0:
        return "Recommended based on recent friend activity.";
      case 1:
        return `${friends[0].firstName} is currently playing this.`;
      case 2:
        return `${friends[0].firstName} and ${friends[1].firstName} are playing this.`;
      case 3:
        return `${friends[0].firstName}, ${friends[1].firstName} and ${friends[2].firstName} are playing this.`;
      default:
        return `${friends[0].firstName}, ${friends[1].firstName} and ${
          friends.length - 2
        } other friends are playing this.`;
    }
  }
  return "Recommended based on recent friend activity.";
};
