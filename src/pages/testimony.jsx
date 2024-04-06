import { useSearchParams } from "react-router-dom";
import mariia from "/mariia-card.png";

function testimony() {
  const [searchParams] = useSearchParams();
  const cardId = searchParams.get("id");

  return (
    <div>
      <div className="pt-5 bg-[#0D3541]">
        <div className="flex mx-auto md:px-20 2xl:max-w-7xl text-[#88898B]">
          <div className="w-2/3">Photo</div>
          <div className="w-1/3 flex flex-col items-end text-end pb-12">
            <div className="flex flex-row-reverse justify-end pb-5">
              <div className="w-20 rounded-full overflow-hidden">
                <img src={mariia} alt="photo" />
              </div>
            </div>
            <p>
              First name:<span className="text-[#E3E4E8]"> MARIIA</span>
            </p>
            <p>
              Last name:<span className="text-[#E3E4E8]"> EMELIANOVA</span>
            </p>
            <p>
              Place of birth, Country:
              <span className="text-[#E3E4E8]"> village KOLOS, RUSSIA</span>
            </p>
            <p>
              The year of Salvation by Jesus Christ:
              <span className="text-[#E3E4E8]"> 2011</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>Testimony for card with ID: {cardId}</p>
      </div>
    </div>
  );
}

export default testimony;
