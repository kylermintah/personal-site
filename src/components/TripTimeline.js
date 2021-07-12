import * as React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function TripTimeline(props) {
  return (
    <div>
      <img
        style={{
          maxWidth: '20em',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '70%',
        }}
        src="https://cdn.dribbble.com/users/912110/screenshots/2180306/plaza-800x600.gif"
        alt="casino resort hotel"
      ></img>
      <VerticalTimeline className="k-overflow" layout="2-columns">
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="July 22nd, 9:15 AM - 11:26 AM"
          dateClassName="k-date-2"
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <img
              className="vertical-timeline-element-icon bounce-in"
              src="https://www.wavetransit.com/wp-content/uploads/2017/03/wave-connect-bus-icon-300x300.png"
              alt="Greyhound Bus Logo"
              height={55}
            />
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: 'lighter' }}
          >
            Travel
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <strong>Bus to Atlantic City</strong>
          </h4>
          <p>
            1001 Filbert St, Philadelphia, PA 19107
            <br />
          </p>
          <p style={{ fontWeight: 'lighter' }}>
            Greyhound departs at 9:15 AM from Philly <br></br>
            Note: Alternatively we could take NJ transit (faster) or rent a car
            (more... interesting)
          </p>
          <br />
          <div style={{ height: '200%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d55021.32228528939!2d-74.46634796605547!3d39.37595244455256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20Pennsylvania!3m2!1d39.9525839!2d-75.1652215!4m5!1s0x89c0ee3c49c2580d%3A0x5137e4bec35fe06c!2sResorts%20Casino%20Hotel%2C%20Boardwalk%2C%20Atlantic%20City%2C%20NJ!3m2!1d39.3592412!2d-74.4221589!5e0!3m2!1sen!2sus!4v1625975968443!5m2!1sen!2sus"
              frameBorder="1"
              width="100%"
              height="400em"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="map"
              loading="lazy"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Noon July 22nd"
          dateClassName="k-date-2"
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <img
              className="vertical-timeline-element-icon bounce-in"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8CAgIAAAAtLS2CgoJZWVnR0dH19fXW1tbt7e1/f38+Pj4SEhKqqqrq6urKysq6urppaWmMjIzd3d3ExMTj4+MZGRnz8/MzMzOkpKSRkZF4eHjs7OxUVFRGRkabm5tmZmaysrIoKCgxMTFeXl49PT0gICBoaGgNDQ1MTEz6p0CJAAAKjUlEQVR4nO2d55qqMBCGMesB14aKjcXeVu//Bg+doelMSAj7PPn+nD2hhFdCMjNphqGlpaWlpaWlpaWlpaWlpaWlpaWlpaUlTit7dj4uvPnJ19wb/riz5WCj+qHE6Nt2vf2YVWt76s8Gqp+wgSzzeEpYelWKj12Gs5XqZ+WQ477q0cqca2/2rfqRKTL7FyQepHy5O9UPjpPTX5PoIOVrYql+/E+y3CsPHYD8tVUzvJPjNcBLIR9uV1+kvW/Ml7zIRRerneVdCF8COexarWOPxPHFjP0ulVXnJRQvYTyq5kq08cTzRYzjmWq2UBOx5TPPuFdvz00P0vgiRtVF1ZXKFyJuHYV8kl9gwqjuNc5a4AsR94qc5X47gAHjU4Wxuhm1BqimpA5a5AsRTy0DnlGAFSdVXYe7173Vj/GIe6jtV/E0v9YoXcm2F9Tdxi22/kNcEWX2sUS4t0rXsqWLux1rLS53wn2C7GV8F3AYc4x54Wp2MDbIX4y1VKX+QwIyv1TlcXy3zzBMVkhziqe9uWUrpjgCMIqD+jQBTgwUpQU+3yVJi5I8I6yZkVVXC4g3DOBxZq6m4ekT7xI+PLvNbGcaVoeDxSFKAqed49M+33opGxBVntgeXrJx1iwqjJlWQ1Y6bYCpUhkz5QJ6yA/mBi8Ky3X4WaaK2lP2D56GKB096TXqD9aQCT/CSN/b+EMc78B94jQvTdrckfdmbCoPEGfJRI9xjq8ZPJNr2Da5zzy9D5vESSu8Fcgu0mJUFFs0bbqyDzctk4PsNmnFgWwvootekgCLzffbh2DJ75wVbOaWb1RxGubuw4rHEyDshxI+Q/AzT4NqL7PIwioieGeZCcMu/n93wes+k1yV9BsQqiHpV14Yjv+1eRtjmdKMDct9sIsdtPngNI+x+cawaYRMQvCGFrJgi1tksZxXKc3oJ0qaW3tWPG3i0NxN9iUckPIRho+QGGZXVkpil3LaluhQs7lowhe6tWosZD6CLdSSo1eX7/VfQ93RiEJbRWR7LMSBQ5mnQWan5nllGiEBhcQZrDUSUaCbgWysRIX8ZsjsnsLKaTm0Up2jmFeIzk+gaYN1mSLCzTT5aadxb7xln892lDgFyv5nGdYUxArRhKLafQedYUjYT+pxM/ISLS9qBPrRrTLZu+Qv17d8Mj8KTSjMBC9HON8SLjLCoFXerdl8MJ2aN3b1X9XStm3zwmb+P8vNjj1MO/hr6hOCEocm7IkJvtnoX7SS8JH812Wj+I5bFhXJKbsmmfASCjHe0PZUJaHrG9ex5smBLfuOCdMH5CTsibBslgS/PiaM26lBQHhn6eAfJ3GBM8Km71DIS8R7hSnhaB/qEBBmoQvDGrMi4fN0u93+LfgJBbxEgt+WEh6C577dXiEhqO6+SoS91+FwGA2bEF6NhsJWpL2aUsoe8MGLhI1LaXPbDdsW5ghhTfPKDB0z8ekE1jRhx04jIc2ZesJZ5gK8ktZLLGEzwwbZ7RVnVdkevkJjxggai1+jSAhKaT9HSMm3kXWK67qMAedRjwIgDJFebH20l0fQE39NCcc/C1990yc8LMI/o2utGX4cRPJ186nUS12fzzopLD8J4SC2NSfb4J2Msmr9MI4Id+vH+PkcP9nZr7If/h/PZ2YfTPCIDUKL+CA3+8p8Nav0x/dqRR9mgLcWG9jffaI5I1bYT6RJVw3+FUoZ0IO1iPlzN/GvUMpYF2ykn915c8AX0v3nm3FoR3O9OfRAE3qfbybzAdJeLaLwXQmwuRYpbGPFW5vim3vlhJz1AN6tyJlcUPkb1h6qS0cbHHzxGoqnDQjnbJyq8NPeskNP2Bf/Ay+BdjSecGFwaECwSQHhLwwY5gn34Mg6RwjER8jlB1Os7tw7zJILhGC8WIEQXMJF2OOyvpED9DpCyDNSCt0adoKQw3CbUpxQ9YQcnd6UwREdINwaZCH7tbtCyFHVUIbPqCfsccSjcB3b3SGkx75JEb0OEJLdC1rMsgOEZAeOEuzOEZ7qrbYXPAQIF42ttl5huDFG6AhGkXA5Aco7FzN4COYFkl04E59CSA7uL3kJRYpCeKHefPLXCMmDwGhjdrtASHXz0XG2zhBSl9KgjQhWT9gjB74pHYfdIKSabdyEO3OQysx//VN4CKRvYDr8nEiE1Kk03IQubL7zufbhIbA6iw3ToX1JIqR6+dyEk3rCnO0CKoY/RwjSi4TgUI4QpHMTtlZKNaE0Qmr/E3eLr4yQurDU4o8R0m0aSiCqG4RUu5Q0l6wLhGOqb0GaS9YFQnLAlLR2SRcIyUMJKEH9ThCeqITc0UQOu3QJ0+EQLgohvY8UOfmoRLgzgfJf/woeAukbmM7pW3AMbsPN/y8TihSFkN6TTwnUdIGQvh4opUFUT8jT90Qa4a2ekGPcGWkAtHpCnqHQhNnVHSDkmVhCiCdCwvN1lOorH/86brNDF1AzmF9Z+hVOnyAQ8oxOJFQ1yBZfXpyGbzQ7wW5TbrVxzuu+/iFCvgGm+FCNakLeeTPISeNdIBxzAVImq6om5B2FjR5Cq5yQd4YeevylYkL+RUC+/wrhiRMQPy5KNSH/XGDscAW1hE2m52H9C7VWW6P5LNi1WAGh7Q1Tefm+9Rk8BOIxDkyHARwkYZOFFJFxYaXeU8NFB5C/olLCyecbvRGurlFJ2GwaMNZyU0rYNG9UP6JCwuarmaIaDEiYC2Cnoftvs0qxsWXBNBiOwBA2X3sPE67JjS+FjVtaCZxZlWKvbgXTYHH4TChiijVmwcRcewgNlJSw0tdMng6ud5frYUEQilg+EfESlRGKmSWP+BLVEYqZgPy5j0YVobDVIT92JSojFLXQwceQlCJCsH5RU31anlUNocg19j+FvxUR5pa2b6gPI6SUENLHeb3V+642NYRi1/R+3yOcJ6yy2maVVltGmAlLKHy1kTfllDHY8FbbpdWEn+zSYNvd2kyFLxhTGwBnbG4DD8YaAKVfymZQoXS4DUyEztBg4D6rs5WxV0mdLyx7X5RDZbZSPNKalanYj4S8gCqX4Wm60F6NqjfqkrOAEtBvOVfBDUWmquhp00DQZ5UNf4m76VT0Y8gnLHVFs4bxw3fajCsQpWymAVRan4NvMRqkKtbXZ2OJW/cYFSEG8fs+5GRWIUp8i05pEKikldMyVSycXGmuCFMxM+7V55ogSmQs5cSxhglZLe2RWyl2b2XDdfwK38IBDy3tKI9eWVQ0oKy9usoiLZohjK/VDXOnyL1ghALKbOjLsl4tv0aZplqNvFYRpW9dWSX8ZogC+Nrd0DnR6tESI5PVx/xZrZRU1sL+sfVqwb5hbK+khCba3CQzKqhDi5rhNn/n5TspfYGRrH6FDyCI76HwC4Ry9jIQ/d9NykrvfFp+iWb0+TxJIUNOzYQ2jj7fXMJeBA113or6HoP31z2+QMu9AMYgdtGXG75romBz30aM/uXXSUuOPKes86gqgoR+fZ4CH4Ks6fHOARlcMu9I84fQ1N1XBgPr4djF+zt4kTbLxb0m6FmEY+ubK2Gf7Tb0bR7n6+robpo6Wpy72TLgZTnL4/C0LUaz1y9vMTH/OlxBO2cQjHMeOBy7P2lpaWlpaWlpaWlpaWlpaWlpaXVe/wGhCr73RGPNowAAAABJRU5ErkJggg=="
              alt="Hotel icon"
              height={55}
            />
          }
          // icon={
          // <FontAwesomeIcon className='fas fa-lg'  icon={faGraduationCap} />}
        >
          <div className="content">
            {/* <img src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={70}/> */}
            <div className="text">
              <h3 style={{ fontWeight: 'lighter' }}>Hotel Check-in</h3>
              <h4>
                <strong>Resorts Casino Hotel</strong>
              </h4>
              <p>1133 Boardwalk, Atlantic City, NJ 08401</p>
              <p style={{ fontWeight: 'lighter' }}>
                Check-in time 12:00 <br></br>
                <br></br>
              </p>
              <div>
                <img
                  style={{
                    maxWidth: '20em',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '70%',
                  }}
                  src="https://www.mohegan.nsn.us/images/default-source/default-album/resorts---exterior.jpg?sfvrsn=9050732c_0"
                  alt="casino resort hotel"
                ></img>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="July 22 - July 24"
          dateClassName="k-date-2"
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <img
              className="vertical-timeline-element-icon bounce-in"
              src="https://cdn.dribbble.com/users/309027/screenshots/1978754/rio-beach-animation.gif"
              style={{ objectFit: 'cover' }}
              alt="Greyhound Bus Logo"
              height={55}
            />
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: 'lighter' }}
          >
            Fun!😜
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <strong>We live</strong>
          </h4>
          <p>
            Atlantic/Ocean City
            <br />
          </p>
          <p style={{ fontWeight: 'lighter' }}>
            <li>beach</li>
            <li>self-taught surfing</li>
            <li>spa session</li>
            <li>dancing</li>
            <li>photography</li>
            <li>good food</li>
            <li>lighthouse visit</li>
            <li>heritage museum visit</li>
            <li>amusement park</li>
            <li>at least one late night netflix marathon</li>
            we'll decide together. Will nail down a good itinerary ahead of
            trip!
          </p>
          <br />
          <div style={{ height: '200%' }}>
            <img
              style={{
                maxWidth: '20em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '70%',
              }}
              src="https://a.cdn-hotels.com/gdcs/production134/d1271/a5bf53f4-108f-46cc-8027-ffb821fdf3bc.jpg"
              alt="casino resort hotel"
            ></img>
            <br />
            <br />
            <h6 style={{}}>What about the weather?</h6>
            <br></br>
            <img
              style={{
                maxWidth: '20em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '70%',
              }}
              src="https://www.theweather.com/wimages/fotof7d070f19c97d3bc8038910c9fe8fbc3.png"
              alt="weather widget"
            ></img>
            <br />
            <br />I checked the 10 day forecast and the weather is looking
            decent over the dates we would be there!<br></br>
            <a
              href="https://weather.com/weather/tenday/l/USNJ0015"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'orange', fontWeight: 'bold' }}
            >
              Link to detailed 10 day weather report.
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="July 25th, 12:14 PM - 2:35 PM"
          dateClassName="k-date-2"
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <img
              className="vertical-timeline-element-icon bounce-in"
              src="https://www.wavetransit.com/wp-content/uploads/2017/03/wave-connect-bus-icon-300x300.png"
              alt="Greyhound Bus Logo"
              height={55}
            />
          }
          // icon={
          // <FontAwesomeIcon className='fas fa-lg'  icon={faGraduationCap} />}
        >
          <div className="content">
            {/* <img src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={70}/> */}
            <div className="text">
              <h3 style={{ fontWeight: 'lighter' }}>Travel</h3>
              <h4>
                <strong>Bus back to Philly</strong>
              </h4>
              <p>1133 Boardwalk, Atlantic City, NJ 08401</p>
              <p style={{ fontWeight: 'lighter' }}>
                Departs at 12:14 PM
                <br />
                Arriving in Philly at 2:35 PM <br></br>
                <br></br>
              </p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d393027.64458264585!2d-75.09152962900795!3d39.68282024401618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x89c0dd576e5cc721%3A0x4a6fcb43e9675262!2satlantic%20city%20nj!3m2!1d39.3642834!2d-74.4229266!4m5!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sphiladelphia%20pa!3m2!1d39.9525839!2d-75.1652215!5e0!3m2!1sen!2sus!4v1625980975019!5m2!1sen!2sus"
                  frameBorder="1"
                  width="100%"
                  height="400em"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="map"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br></br>
      <br></br>
      <div style={{ objectPosition: 'center' }}></div>
      <br></br>
      <br></br>
      <img
        style={{
          maxWidth: '10em',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '70%',
          borderRadius: '50%',
        }}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/08c09a96803645.5eb69dbb78db0.gif"
        alt="casino resort hotel"
      ></img>
      <p style={{ textAlign: 'center' }}>
        <br></br>
        <h4 style={{ fontWeight: 'lighter' }}>
          From Philly we take regional rail (and Amtrak 😛) to respective homes.
          Back in time to feed Gabby!
        </h4>
        <br></br>
        <br></br>
        <strong>Tyler Lawson, do you accept the mission?</strong>
        <br></br>
        <br></br>
        {AcceptPrompt()} &nbsp;&nbsp;&nbsp;
        {NotAcceptPrompt()}
      </p>
    </div>
  )
}

function AcceptPrompt() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        I accept!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get hype! 🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tyler, this trip is my gift to you 🎁. Therefore don't even think
          about venmo. Consider it purged from the app store. Doesn't exist...
          unless my card declines on the boardwalk. That was a joke! (I hope){' '}
          <br />
          <br /> I spent time combing through work beneifts to write off as much
          as possible (hotel, travel, etc.) <br></br>
          <br></br> I want to take you on this trip both as a congratulatory
          gift for getting into one of the top Law Schools on the planet and to
          spend some quality time with my favourite person.
          <br />
          <br />
          <strong>So what happens next?</strong>
          <br />
          I'm so glad you asked. First, please message me to let me know that
          you've decided to come (at the time of writing I'm debating coding the
          button you just clicked to send me an automatic receipt of your
          response but my fingers and brain are tired).
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function NotAcceptPrompt() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        I do not accept...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Well then an Error Occured</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yeah well this is awkward... whoops um, it looks like there was an
          error processing your response... please contact the programmer
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TripTimeline
