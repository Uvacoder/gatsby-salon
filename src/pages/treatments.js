import React from 'react'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'

import { treatmentsData } from '../data/treatmentsData'

import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { IoIosArrowDropup } from 'react-icons/io'

const CollapsibleStyles = styled.div`
  .Collapsible {
    margin-bottom: 3rem;
    &__trigger {
      h3 {
        margin-left: 3rem;
        margin-bottom: 0;
      }
      &.is-open {
        min-height: 256px;
        .icon {
          top: 104px;
          transform: rotateZ(180deg);
        }
      }

      position: relative;
      border-radius: 10px;
      display: flex;
      align-items: center;

      min-height: 128px;
      background-image: linear-gradient(
          to right,
          var(--gradient-primary),
          var(--gradient-secondary)
        ),
        ${props => `url(${props.bg})`};
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      transition: min-height 300ms;
      .icon {
        height: 48px;
        width: 48px;
        position: absolute;
        right: 3rem;
        top: 40px;
        display: block;
        transition: all 300ms;
      }
    }
  }
`

export default function TreatmentsPage() {
  return (
    <main>
      <SEO title="Treatments"></SEO>

      <PageHero title="Treatments" />

      <div className="wrapper-column">
        {treatmentsData.map(treatment => {
          return (
            <CollapsibleStyles bg={treatment.image}>
              <Collapsible
                key={`treatment-${treatment.id}`}
                trigger={
                  <>
                    <h3>{treatment.name}</h3>
                    <IoIosArrowDropup className="icon" />
                  </>
                }
              >
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: treatment.description }}
                />
              </Collapsible>
            </CollapsibleStyles>
          )
        })}
      </div>
    </main>
  )
}
/*
const treatmentsData = [
  {
    id: 1,
    name: 'Remedial Massage',
    price: [
      { time: '30m', price: '$55' },
      { time: '45m', price: '$75' },
      { time: '60m', price: '$95' },
      { time: '90m', price: '$140' },
      { time: '120m', price: '$180' },
    ],
    image: remedialBg,
    description:
      '<p>Remedial massage therapy is a massage based application used to treat a number of conditions affecting the muscles, tendons, and ligaments of the body.</p><p>This holistic treatment helps to restore the balance between muscles and the skeletal system to allow your body to function at its optimal level, with less discomfort. Your Remedial Therapist will assess any underlying causes and develop a treatment plan.</p><p>You may also be able to claim this treatment on your health fund. Please confirm your Health Fund at the time of booking.</p>',
  },
  {
    id: 2,
    name: 'Relaxation Massage',
    price: [
      { time: '45m', price: '$70' },
      { time: '60m', price: '$90' },
      { time: '90m', price: '$130' },
      { time: '120m', price: '$170' },
    ],
    image: relaxationBg,
    description:
      '<p>Relaxation massage is recommended for people who prefer soft and light pressure in their massage session. You can ask the massage therapist to adjust the pressure to your liking.</p> <p>This gentle and smooth massage combines the most relaxing elements of Swedish and Eastern massage techniques.</p><p>Relax with soothing massage techniques performed by a qualified therapist, designed to create a deep sense of relaxation, relieve tension and soothe your fatigued body and mind.</p>',
  },
  {
    id: 3,
    name: 'Deep Tissue Massage',
    price: [
      { time: '45m', price: '$70' },
      { time: '60m', price: '$90' },
      { time: '90m', price: '$130' },
      { time: '120m', price: '$170' },
    ],
    image: deepTissueBg,
    description:
      "<p>Deep tissue massage is a massage technique that's mainly used to treat musculoskeletal issues, such as strains and sports injuries.</p><p>It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.</p><p>You can ask the massage therapist to adjust the pressure to your liking.</p>",
  },
  {
    id: 4,
    name: 'Aromatherapy Massage',
    price: [
      { time: '45m', price: '$80' },
      { time: '60m', price: '$100' },
      { time: '90m', price: '$145' },
      { time: '120m', price: '$185' },
    ],
    image: aromatherapyBg,
    description:
      '<p>Aroma Massaged addresses numerous physical and emotional concerns.</p><p>Your massage therapist will decide which essential oils to use, but you can let them know if you have a preference.</p><p>Essential oils have the ability to attend to all your mental, emotional, and physical needs. They can help restore you to a state of overall well-being.</p>',
  },
  {
    id: 5,
    name: 'Pregnancy Massage',
    price: [
      { time: '60m', price: '$95' },
      { time: '90m', price: '$140' },
    ],
    image: pregnancyBg,
    description:
      '<p>Your pregnancy massage qualified therapist will customise this treatment to your needs, helping to relieve tension, calm your mind, and melt away individual aches and pains.</p><p>Throughout the massage our special pregnancy massage table and pillow will support your hips and joints, allowing you to relax and enjoy this nourishing treatment with extra cushioning and comfort.</p><p>Your appointment includes a professional consultation to understand your specific needs and concerns to be addressed throughout your treatment.</p>',
  },
  {
    id: 6,
    name: 'Hot Stone Massage',
    price: [
      { time: '60m', price: '$100' },
      { time: '90m', price: '$145' },
      { time: '120m', price: '$185' },
    ],
    image: hotStoneBg,
    description:
      "<p>A hot stone massage is a type of massage therapy. It's used to help you relax and ease tense muscles and damaged soft tissues throughout your body.</p><p>Our massage therapist holds the stones in their hands and uses them to massage with. This allows the therapist to get deeper into the muscles without more pressure, helping their client to relax yet further.</p><p>During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.</p>",
  },
  {
    id: 7,
    name: 'Couple Massage',
    price: [
      { time: '60m', price: '$200' },
      { time: '90m', price: '$280' },
      { time: '120m', price: '$380' },
    ],
    image: coupleBg,
    description:
      '<p>Treat you and a loved one to Treat you and a loved one to a couples massage. For most of us daily life if full of tasks and activities, book a couples experience today and give yourselves some much needed time together to relax and unwind.</p><p>Couple massages can be booked for you and a friend, or you and a family member to create the ultimate pampering experience. a couples massage. For most of us daily life if full of tasks and activities, book a couples experience today and give yourselves some much needed time together to relax and unwind.</p><p>Couple massages can be booked for you and a friend, or you and a family member to create the ultimate pampering experience.</p>',
  },
  {
    id: 8,
    name: 'Tibetan Singing Bowl Therapy Sounds Massage',
    price: [
      { time: '30m', price: '$50' },
      { time: '45m', price: '$65' },
      { time: '60m', price: '$80' },
    ],
    image: singingBowlBg,
    description:
      '<p>To put it simply, above all it is the sound and vibrations of singing bowls positioned with care on the dressed body. Gentle and harmonious sounds are absorbed and as a result, the client is quickly able to achieve a state of deep relaxation.</p><p>Besides that, the rhythmic sounds saturate the body and produce a subtle vibration which is a kind of a “massage” element.</p><p>During a sound massage, an atmosphere of safety and security is created, making it possible to let go – release stress, anxiety, worry, doubt and feelings that have a negative impact on our health.</p>',
    // Photo by Magicbowls from Pexels
  },
]
*/
