function LikeButton() {
  const [ liked, setLiked ] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text,
  );
}
const domContainer1 = document.getElementById('root');
// ReactDOM.render(React.createElement(LikeButton), domContainer);

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton),
  ),
  domContainer1
)
