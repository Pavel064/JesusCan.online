import { useEffect, useRef } from "react";

import { useSearchParams } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mariia from "/mariia-card.png";
import mariiaBefore from "/mariia-before.png";
import brokenСhain from "/broken-chain.svg";
import sin1 from "/Fornication.svg";

gsap.registerPlugin(ScrollTrigger);

function testimony() {
  const [searchParams] = useSearchParams();
  const cardId = searchParams.get("id");
  const lesbianismRef = useRef(null);
  const parallaxRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const lesbianismElement = lesbianismRef.current;
    const parallaxElement = parallaxRef.current;
    const contentElement = contentRef.current;

    if (lesbianismElement && parallaxElement && contentElement) {
      gsap.set(parallaxElement, {
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        backgroundColor: "white",
      });

      ScrollTrigger.create({
        trigger: lesbianismElement,
        start: "bottom bottom",
        end: "bottom top-=200%", // Увеличиваем область прокрутки
        scrub: true,
        onUpdate: (self) => {
          gsap.to(parallaxElement, {
            top: `${100 - self.progress * 200}%`, // Увеличиваем диапазон движения
            ease: "none",
          });
        },
      });
    }
  }, []);

  return (
    <div>
      <div className="pt-5 mb-32 bg-[#0D3541]">
        <div className="flex mx-auto md:px-20 2xl:max-w-7xl text-[#E3E4E9]">
          <div className="w-3/5 relative">
            <div className="absolute top-16 flex items-center">
              <div className="w-2/5 rounded-full overflow-hidden">
                <img
                  src={mariiaBefore}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/5 rounded-full overflow-hidden">
                <img
                  src={brokenСhain}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/5 rounded-full overflow-hidden">
                <img
                  src={mariia}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-2.5 items-end text-end pb-12 text-sm">
            <div className="flex flex-row-reverse justify-end pb-2.5">
              <div className="w-20 rounded-full overflow-hidden">
                <img src={mariia} alt="photo" />
              </div>
            </div>
            <p>
              First name:<span className="text-xl text-[#E3E4E8]"> MARIIA</span>
            </p>
            <p>
              Last name:
              <span className="text-xl text-[#E3E4E8]"> EMELIANOVA</span>
            </p>
            <p>
              Place of birth, Country:
              <span className="text-xl text-[#E3E4E8]">
                village KOLOS, RUSSIA
              </span>
            </p>
            <p>
              The year of Salvation by Jesus Christ:
              <span className="text-xl text-[#E3E4E8]"> 2011</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/bg-testimony-chein.svg')] bg-cover bg-no-repeat text-sm">
        <div className="flex flex-col gap-6 mx-auto md:px-20 2xl:max-w-7xl text-[#E3E4E9]">
          <div className="flex gap-3.5 w-2/3 p-7 pl-12 rounded-l-full self-end bg-[#0D3541]">
            <div className="content-center min-w-24">
              <img src={sin1} alt="fornication" className="w-24" />
              <p className="pt-1">Fornication</p>
            </div>
            <p className="text-start text-pretty content-center">
              In the photo on the left, I am 16 years old. At that age, I fell
              into fornication and by the age of 18 I was already intimate with
              4 men. Not counting just "kissing" and flirting. In my environment
              of non-believing friends, this was the norm.
            </p>
          </div>

          <div className="flex gap-3.5 w-2/3 p-7 pr-12 rounded-r-full self-start bg-[#0D3541]">
            <p className="text-end text-pretty content-center">
              My first sin started when I was 6 years old. Yes, the devil is so
              merciless. It wasn't substance addiction, thankfully. But this bad
              habit was with me every day until I was 17 and spoiled my body (I
              tried to fight it for 11 years because I didn't know God). My
              parents didn't know what was happening to my body, they thought it
              was some kind of disease. They showed me to the doctors, who threw
              up their hands. One day, on the way back from the hospital, my
              parents and I got into a serious accident, where dad skidded on a
              slippery road, and we crashed into a passing car on the highway. I
              remember, my parents borrowed a large amount of money to cover the
              damage of another driver.
            </p>
            <div className="content-center min-w-24">
              <img src={sin1} alt="Addiction" className="w-24" />
              <p className="pt-1">Addiction</p>
            </div>
          </div>

          <div className="flex gap-3.5 w-2/3 p-7 pl-12 rounded-l-full self-end bg-[#0D3541]">
            <div className="content-center min-w-24">
              <img src={sin1} alt="Fear" />
              <p className="pt-1">Fear</p>
            </div>
            <p className="text-start text-pretty content-center">
              At the age of 12.5, when I was in the 6th grade, the worst hell in
              my life began. I realized that I have parasites in my hair. I
              couldn't admit this to my parents and every night I fell asleep in
              fear that one day everyone at school would find out about it. I
              began to be terribly afraid of school doctors and for the first
              time every day I prayed to an unknown God that the doctor would
              not come with a hair check. Of course, when this infection had
              already spread to my classmates, one of the parents reported it at
              a school meeting and my head was also treated. It took many, many
              months before it became known. Not long before I was cured, the
              devil prepared a new fear for me. It seemed to me that I was
              infecting everyone around me, but with a different disease.
              Therefore, until the 11th grade, I lived with this fear of doctors
              and white coats, praying every morning that I would not meet them.
              When it happened, I remember almost fainting, turning green with
              fear. During the day I was an athlete, an excellent student at
              school, the leader of the girls in the class, and at night I
              sobbed into my pillow because I couldn't do anything about my
              filthy life. At this time, I say the following phrase: "God, if
              You are and there is the Kingdom of Heaven, then I don't even have
              a chance to get there."
            </p>
          </div>

          <div
            ref={lesbianismRef}
            className="flex gap-3.5 w-2/3 p-7 pr-12 rounded-r-full self-start bg-[#0D3541]"
          >
            <p className="text-end text-pretty content-center">
              When the devil is the owner of your life, he encourages you to do
              all kinds of bad things. So one day, having at that moment, as it
              seemed to me, a beloved man, I was intoxicated by my girlfriend.
              My lip was blown up from the kiss and was very swollen. I had to
              lie to my parents and my boy where it came from...
            </p>
            <div className="content-center min-w-24">
              <img src={sin1} alt="Lesbianism" className="w-24" />
              <p className="pt-1">Lesbianism</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" style={{ height: "100vh" }}>
        <div
          ref={parallaxRef}
          className="absolute top-full w-full flex items-center justify-center h-full bg-[url('/sky.svg')] bg-cover bg-no-repeat"
        >
          <div
            ref={contentRef}
            className="p-10 text-[#0D3541] text-start text-pretty 2xl:max-w-7xl w-full mx-auto"
          >
            <p>
              I understood that my whole life was a path to death. It seemed to
              me that God would not let me live long on this earth so sinful and
              incorrigible. In moments of pain, I did not understand how, on the
              one hand, such a popular girl at school, unrestrainedly cheerful,
              I hung on the honor boards both at school and in the rhythmic
              gymnastics sports section, having the most devoted friends, could
              be so rotten inside. I asked God at the age of 17 not to take my
              life until I read His word, the Bible, at least three times. And I
              very zealously began to seek salvation in Him. Soon God sent me my
              future husband, whose father served God. This meeting changed
              everything. The Holy Spirit opened my eyes and gave me hope. I
              realized that Jesus died for all my sins, and He would cleanse me
              of all my habits and He will save me from fears and feelings of
              guilt. I fell to my knees in tears and repentance until I believed
              that I had been forgiven by my Father and cleansed. At the age of
              18, my life was completely transformed. All the past is gone. God
              gave me true love, my husband Pavel, with whom we have been
              together for more than 12 years. When I was 21 and my husband was
              23, we earned our first apartment, without loans and mortgages,
              working at regular jobs as a seamstress and furniture assembler,
              while renting an apartment. Today I am not asking how this became
              possible.. It's just that my faith and love for God destroyed all
              unbelief on the part of my family and friends. After all, if Jesus
              saved me FROM THIS, then anything is possible for Him. He gave us
              a roof over our heads, a car that we needed in our active life, we
              got married, traveled the world and went to live abroad. I'm 30
              today. God still protects me because I am faithful to Him. To whom
              much has been forgiven, he loves much (Luke, chapter 7).
            </p>
            <p>
              *** P.S. By the way, today I create medical clothes. Yes-yes,
              those same white coats, at the sight of which I used to fall into
              fear. Our brand of medical clothing is sold all over Russia. God
              is so wonderful! Of all the fears, I have only one left - the fear
              of God. My whole life praises the Lord, oh, how I'm afraid to
              disappoint Him one day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testimony;
