import AvatarImg from '../img/Rectangle 180.jpg'
import "../styles/Avatar.css"

export default function Avatar() {
    return(
        <div className="avatar">

          <div className="AvatarImg">

            <div className="AvatarBorder">

              <div className="ConnectionStatus">
                <div className="ConnectionSign">
                </div>
              </div>

            <img src={AvatarImg} alt="Avatarimg"
                height={'150px'}
                width={'150px'}
                style={{ borderRadius: '50%'}}
            />
            </div>

          </div>

        <div className="profileName">
      <p>Surname Name</p>
      <p>Student</p>
        </div>
    </div>
    )
}