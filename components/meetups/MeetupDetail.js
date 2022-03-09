import Image from 'next/image'

import classes from './MeetupDetail.module.css'

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      {/* <img src={props.image} alt={props.title} /> */}
      <Image
        src={props.image}
        alt={props.title}
        className={classes['detail-image']}
        width={1200}
        height={600}
        layout='responsive'
        priority='true'
        // sizes='100vw'
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetail
