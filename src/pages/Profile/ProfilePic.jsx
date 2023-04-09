const ProfilePic = () => {
    return (  
        <div className="profile-header text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Picture"
                    className="profile-picture img-fluid rounded-circle"
                />
                <h2 className="profile-username mt-3">John Doe</h2>
                <p className="profile-bio">Web Developer | Freelancer</p>
                </div>
    );
}
 
export default ProfilePic;