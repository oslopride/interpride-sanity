import React from "react";
import styled from "styled-components";
import getYouTubeID from "get-youtube-id";

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`;

const Embed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function Preview({ value }) {
  if (!value || !value.url) {
    return null;
  }
  
  const id = getYouTubeID(value.url);
  if (!id) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${id}`;
  return (
    <Wrapper>
      <Embed
        title="YouTube"
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </Wrapper>
  );
}

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL"
    }
  ],
  preview: {
  	select: {
  		url: "url"
  	},
  	component: Preview
  }
}