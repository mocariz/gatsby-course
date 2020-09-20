import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    backgroundColor={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    timeToRead={hit.timeToRead}
    />
)

export default Hit