export default function OrderSuccess({ onAgain }) {
  return (
    <div className="success-box">
      <div className="success-icon">✓</div>
      <div>
        <strong>Order received!</strong>
        <p>Make yourself comfortable. We will bring it to your table.</p>
      </div>
      <button type="button" onClick={onAgain}>Order again</button>
    </div>
  );
}
