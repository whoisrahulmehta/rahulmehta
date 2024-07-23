import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [time, setTime] = useState(new Date());
  const [greetmsg, setGreetmsg] = useState("Day");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = time.getHours().toString().padStart(2, "0");
  useEffect(() => {
    let newMsg = "Morning";

    if (hours >= 4 && hours < 12) {
      newMsg = "Morning";
    } else if (hours >= 12 && hours < 17) {
      newMsg = "Afternoon";
    } else if (hours >= 17 && hours < 21) {
      newMsg = "Evening";
    } else {
      newMsg = "What a beautiful day";
    }
    setGreetmsg(newMsg);
  }, [time]);

  const navigate = useNavigate();

  return (
    <section className="blogpage flex flex-col justify-start items-center gap-[2vh]  border border-white mt-[5vh] w-[100%]  py-[7vh]">
      <div className="greet  flex sm:flex-row flex-col-reverse justify-center items-center gap-[4%] greet w-[100%] h-[45vh] ">
        <h1 className="sm:text-5xl text-5xl text-black font-[500] capitalize sm:w-[45%] w-full text-center whitespace-nowrap ">
          {greetmsg + " "} Friend !
        </h1>
        <p className="img md:w-[55%] w-full  sm:h-[60%] h-[100%]  flex flex-row justify-center items-center">
          {/* <img
            className="w-[100%] h-[100%] object-cover origin-center "
            src="/rahulmehta/public/rahulimg.jpg"
            
            alt="img"
          /> */}
          <img
            className="w-[100%] h-[100%] object-cover origin-center "
            src={`https://github.com/whoisrahulmehta/assetsforwebsites/raw/29959e1613289ad0dd2ca03bfd71d96be05cdb62/portassets/rahulimg.jpg`}
            alt="img"
          />
        </p>
      </div>
      <h1 className="w-full h-[7vh] my-[4%]  sm:text-5xl md:text-7xl text-3xl sm:text-left text-center font-[600] ">
        Who is Rahul Mehta ?
      </h1>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        I am a dedicated Frontend Developer with a solid foundation in web
        development technologies and a passion for creating exceptional user
        experiences. My journey began with HTML5, CSS, and JavaScript, and I
        have since expanded my expertise to include advanced styling frameworks
        such as SASS (SCSS), Tailwind CSS, and Bootstrap. Driven by a passion
        for modern web development, I have mastered React.js and have
        successfully built a diverse range of projects using both Create React
        App (CRA) and Vite. My commitment to continuous learning and innovation
        fuels my drive to stay at the forefront of web development trends and
        technologies.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-2xl py-][7%]  ">
        Roots :
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        I am from a small, beautiful village situated in the lap of the
        Himalayas, in the district of Shimla, Himachal Pradesh (Bharat). As a
        kid born in the 90s, I had very limited access to technology during my
        childhood. There was even a scarcity of electricity in those early
        times. I grew up studying in a local primary school run by the
        government of Himachal Pradesh, with limited access to the outer world.
        I enjoyed a joyful childhood in my village, living with my grandparents,
        parents, and the rest of my family. I used to be a bright student. From
        the moment I joined school, I scored good grades and excelled in math
        and numbers. Impressed by my performance, my school teacher advised my
        parents to take me to town for further education.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        After which, the following year when I got into the 8th standard, I was
        brought to our nearest town to attend a public convent school run by
        missionaries, where English was the primary language for students. The
        irony was that my only exposure to English was through books and cricket
        match commentary. At the beginning, I faced a bit of teasing and
        bullying for being from a Hindi medium government school, but slowly
        this faded away.
        <br />
        Finally, after a few days, I started making new friends and got
        introduced to our neighbors who were in my school. I found some friends
        in my class who are still my friends after more than 12 years—brothers,
        actually. At that time, I had never even seen a computer in front of me,
        and I was very curious to see what magic it was. I literally touched a
        computer for the first time in my life when I was in the 8th standard.
        This was because I was brought to this new school; otherwise, things
        would have been different. I quickly learned the basics of computers,
        and my computer teacher was really impressed with my progress. By the
        end of the year, I was as good as the other students in my class in
        English, computers, math, and science. I was very fascinated by science
        and math—they were my favorite subjects. In my village school, we didn't
        have a science or math teacher, so we didn't study those subjects for
        two years straight. Maybe that's why my parents thought of taking me to
        a better place. At the end of the 8th standard, I got good marks and a
        first division in the final exams. Life changed for me. When I first
        started my journey in this new school, I had zero friends, knew little
        to no English, had never seen a computer, and was an introverted and
        timid kid. But in the span of one year, I became a completely new person
        with a high interest in computers, math, and science. I was equally good
        in other subjects except for social studies, which I used to hate. The
        following year, it felt like I had been studying in this school since
        childhood. I caught up quickly. The year was a whole journey for me, one
        that I'll tell you about another day in some other section.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        The year changed to 2013, and I felt like I had really upgraded. I had a
        great interest in computers, but I had no access to one at home. In
        school, during our computer period, we used to play GTA on the
        computer—a fun memory. I got quite good at computer science and used to
        get good marks in both theory and practicals. This was when I was
        introduced to web pages and HTML. Our teacher told us about HTML, and I
        quickly learned some basics. I created unstyled HTML pages and forms,
        which sparked a great interest in coding and HTML. I started learning
        more and was thrilled when I created a marquee in my practical exam.
        This year, I was one of the bright students in my class, ranking around
        6th to 7th. I excelled in science, math, and English. I was already good
        in Sanskrit, as it was the only subject taught to us in my previous
        school. My parents didn't allow me to participate in sports since
        childhood, which might have contributed to my being an overweight kid.
        However, I still played gully cricket and football, and I had a great
        interest in football. I started watching football matches and local
        tournaments and played with my seniors after school. I was very good in
        math this year, thanks to my tuition teacher. She was not just a teacher
        but like an elder sister to me. She came from a neighboring village and
        was also my relative. She taught me math so well that I consistently got
        good grades from then on. She was a caring person and my second mentor
        after my primary school teacher. Both of them took care of me, taught
        me, and loved me like their own child.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        I think I was a lucky kid as I always had the best teachers in my life.
        Di, my math teacher, made challenging concepts seem easy and sparked my
        interest in math and science. Thanks to her, these subjects became my
        favorites, and I owe my good grades in school to her. In the 10th
        standard, things were magical for me. I excelled in everything. Our new
        math teacher quickly became a friend, and he was a great person. My
        parents didn't expect more than 70% marks in the Board examinations from
        me, but I knew I would score higher. When the results came out, I scored
        81% and ranked 115th in the state. My parents were stunned because they
        thought I didn't study much, yet I achieved excellent marks. This was
        the first time I made them proud, and my achievement surprised our
        entire village. I also received a Certificate of Merit from the School
        Education Authority. I joined a new school for higher secondary
        education, the Government Boys School in the same town, which was
        notorious for its rowdiness. I chose non-medical with computers, as I
        was interested in science and technology. I scored more than 90 marks in
        math, science, and computer science. My math teacher was impressed with
        my learning speed and understanding, and he only called me by my last
        name, signifying our bond. I took ITES as a compulsory subject, a
        diploma program run by the central government along with school. It was
        supposed to be a four-year program, but we completed it in two years by
        studying two stages each year. Life was changing rapidly—new friends,
        rivalries, occasional fights, and studying only for exams. I had many
        friends in the humanities section, known for their fights and nuisances,
        as well as some senior friends, so I was never bullied in this school. I
        got good grades in the 11th standard. Teachers had high expectations,
        and I fulfilled them to some extent. My tuition teacher, who was also a
        friend, believed I would score well. At that time in Himachal, this exam
        was considered crucial. I passed with first division marks and ranked
        89th in the state, earning another Certificate of Merit. My parents were
        incredibly proud, especially since I did so well in English despite not
        even buying an English book that year. My English teacher expected good
        marks from me, as I performed well in class. Physics, chemistry, and
        math became my favorite subjects, and I aspired to be an engineer.
        However, due to a lack of guidance and resources, I pursued a bachelor's
        degree at a nearby college. That's a long story, which I will share with
        you in another section.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        In college, I lost my interest in studies. I wasn't studying at all,
        spending most of my time playing games, watching movies, and
        binge-watching web series. Other than attending classes for attendance
        and aimlessly roaming around, I did very little. I got my first phone in
        the 12th standard, but it was a keypad phone. Later, when I got into
        college, I bought a smartphone with the savings my parents had put aside
        from the money I received on my birthdays. A ₹10,000 phone was expensive
        for me at that time. In college, I was still good at math, as I had
        chosen it as my main subject and only had to study three subjects: math,
        chemistry, and physics. My math teacher became a good friend of mine. He
        had high expectations for me in math, and to some extent, I met them,
        but I had lost my interest in studying. He only knew me by my last name
        and would do me favors, like giving me breaks and allowing me into the
        class even in the last 10 minutes of the period while still marking me
        as present. This made most of the girls jealous, though the boys didn't
        care much, obviously. Haha. Eventually, my math teacher got transferred,
        and the senior math teacher took charge of our class. He had a good
        relationship with our class too. There's also a story about me having a
        crush on a girl who was my senior in college, but I'll skip that for
        now.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        Finally, after three years of not studying seriously, I completed my
        graduation. After that, I moved to the big city of Chandigarh to learn
        web development. This was a life-changing event for me, as I had never
        been out of my small hometown. Here I was, all alone, managing
        everything by myself. In Chandigarh, I learned the value of money. I
        joined a company called How, where I was learning web development. The
        teachers were like friends to me. They taught me the basics of web
        development, and I learned HTML, CSS, and Photoshop there. I have a
        great interest in photography, and I'll leave a link to my Instagram
        photography page for you to check out. Alongside my studies, I took a
        night shift job. My first salary was Rs 15,800. I was so happy when I
        got my first salary. I bought some clothes, earphones, power banks, and
        shoes for myself, and a pair of shoes and a jacket for my father. He was
        so happy that day; I still remember it clearly. However, due to lack of
        sleep, I got so sick that I had to go back home and get admitted to the
        hospital. I stayed home for two months, and sadly, during this time, I
        lost my grandfather, a great and strong man. I had already lost my
        grandmother a few years back. After some time, I returned to Chandigarh
        and resumed my web development training. Then, a historical event
        occurred—the COVID-19 pandemic. This period was an interesting story, an
        amazing experience, yet very scary.
      </p>

      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        Later, I left this and started preparing for the UPSC Civil Service
        Exam. I had already pursued a Master's in Mathematics through a distance
        course, and at that time, I believed I should at least once give my very
        best for the UPSC CSE. So, I started studying again and went into
        isolation. After three years, even though I had positive experiences and
        good results, I had to start working again due to the common financial
        challenges faced by middle-class boys. I began learning and working in
        this new era of web development where React.js is prominent, and I got
        drawn to it. So, here I am, building this portfolio today. During my
        preparation for the UPSC, I experienced many things that changed my
        vision and life. I learned a lot—life taught me many things. It's a
        whole chapter of my life that I will, of course, share with you in due
        time. This journey is the most important part of my life in shaping my
        personality, thoughts, behavior, principles, goals, and understanding of
        life's meaning. I read the Gita, the most precious source of knowledge,
        and I will also share the teachings I learned from it. Initially, I was
        a bit of an atheist, but this journey changed everything for me. I was
        at the lowest point of my life and had to pick myself up all alone. The
        teachings of the Gita helped me immensely in rising from that place and
        becoming stronger after the darkest phase of my life. During this
        journey, I became strong and emotionally stable. I can say this arc was
        placed by God in my life for character development. There are many
        things to tell, so stay tuned with me.
        <br />
        <br />
        This was just my student life, the real character development arc of my
        life started after i finished my college. I will be writing about it
        very soon in another section.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        I will see you again in next section of my blogs. Thanks you for
        visiting, stay tunned.
      </p>
      <h1 className="w-full h-[7vh] my-[4%]  sm:text-5xl md:text-7xl text-3xl sm:text-left text-center font-[600] ">
        Know how i got into Front End Devlopment ?
      </h1>

      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        I come from a small, picturesque village in Shimla, Himachal Pradesh.
        Back in the 90s, technology wasn't something we had easy access to. In
        fact, electricity itself was a luxury at times. My early education was
        at a local government school, where despite the limitations, I managed
        to shine academically. I was always intrigued by numbers and math, which
        impressed my teachers enough to suggest further schooling in a town
        nearby.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        So, at thirteen, I found myself in a public convent school where English
        was the primary language—a stark contrast to my Hindi-medium upbringing.
        Initially, it was tough fitting in, but soon enough, I made friends and
        began to explore this new world. It was here that I first laid hands on
        a computer, and that moment sparked something in me. I quickly grasped
        the basics of computing and impressed my computer teacher.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        As I progressed through school, my love for science and mathematics
        grew. Despite the lack of dedicated teachers for these subjects
        initially, I excelled in them. By the time I finished my secondary
        education with flying colors, I was already envisioning a future that
        blended my academic strengths with my newfound passion for technology.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        College life, however, saw me lose some of that academic focus as I got
        distracted by various interests. Nevertheless, my knack for mathematics
        and computer science remained intact, guiding me towards what would
        become my career path. The turning point came when I decided to move to
        Chandigarh to delve into web development—a move that brought me face to
        face with the bustling city life and a whole new realm of possibilities.
        Here, I immersed myself in learning HTML, CSS, and eventually advanced
        frameworks like React.js. It wasn't just about mastering coding
        languages; it was about discovering a field where creativity meets
        technical precision.
      </p>
      <p className="Intro w-[100%] px-[7%] font-[400] text-lg py-][7%]  ">
        Looking back, I owe a great deal of my success to the teachers and
        mentors who believed in me and the solid foundation laid by my early
        education. Each step—from the quiet hills of Himachal to the vibrant
        streets of Chandigarh—has shaped me into the frontend developer I am
        today. My journey is proof that with determination and the right
        support, anyone can turn their passion into a fulfilling career. As I
        continue to grow in this ever-evolving field, I look forward to sharing
        more about my experiences and insights gained along the way. Stay tuned
        as I uncover more chapters of this exciting journey!
      </p>

      <button className="btn-primary " onClick={() => navigate("/contact")}>
        {" "}
        Subscribe Now{" "}
      </button>
    </section>
  );
}

export default Blog;
