const Reviews = () => {
    return ( 
        <div class="container mt-5">
  <h2 class="mb-4">Reviews</h2>
  <div class="row">
    <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
      <div>
        <img src="https://randomuser.me/api/portraits/men/1.jpg" class="rounded-circle img-fluid" alt="user-image" width="100"/>
      </div>
    </div>
    <div class="col-9 col-sm-9 col-md-9 col-lg-7 col-xl-7 col-xxl-7">
      <div class="card border-0">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-3">
            <div>
            <span class="mt-2 mb-0 fw-bold fs-5">John Doe</span>
            <br />
              <span class="fs-4"><i class="bi bi-star-fill text-warning"></i></span>
              <span class="fs-4"><i class="bi bi-star-fill text-warning"></i></span>
              <span class="fs-4"><i class="bi bi-star-fill text-warning"></i></span>
              <span class="fs-4"><i class="bi bi-star-fill text-warning"></i></span>
              <span class="fs-4"><i class="bi bi-star-fill text-muted"></i></span>
              <span class="ms-2 text-muted fs-5">(4.0)</span>
            </div>
            <div class="text-muted">
              <span class="fs-6">Delivered on Oct 2022</span>
            </div>
          </div>
          <h5 class="card-title mb-4">Great Experience</h5>
          <p class="card-text">I had a great experience working with this seller. He was very professional and delivered the project on time. The communication was also excellent. Highly recommended!</p>
        </div>
      </div>
    </div>
  </div>
</div>
     );
}
 
export default Reviews;