import {
  Trophy,
  Award,
  Medal,
  Code2,
  Star,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    icon: <Code2 className="w-7 h-7 text-primary group-hover:text-white transition" />,
    title: "1000+ Coding Problems Solved",
    description:
      "Solved 1000+ coding problems across Data Structures and Algorithms, strengthening problem-solving and coding skills.",
  },
  {
    id: 2,
    icon: <Award className="w-7 h-7 text-primary group-hover:text-white transition" />,
    title: "AWS Well-Architected Proficient",
    description:
      "Earned AWS Well-Architected Proficient badge demonstrating knowledge of cloud architecture best practices.",
  },
  {
    id: 3,
    icon: <Medal className="w-7 h-7 text-primary group-hover:text-white transition" />,
    title: "Full Stack Certifications",
    description:
      "Completed certifications in Full Stack Development, Web Development, and .NET Core MVC.",
  },
  {
    id: 4,
    icon: <Star className="w-7 h-7 text-primary group-hover:text-white transition" />,
    title: "Enterprise Experience",
    description:
      "Delivered enterprise applications across Pharma, Healthcare, Manufacturing and Real Estate domains.",
  },
  {
    id: 5,
    icon: <Trophy className="w-7 h-7 text-primary group-hover:text-white transition" />,
    title: "Inspire Award Winner",
    description:
      "Recipient of Inspire Award for academic achievement and innovation.",
  },
];

export const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4"
    >

      <div className="container mx-auto max-w-7xl">

        {/* Heading */}

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          My{" "}
          <span className="text-primary">
            Achievements
          </span>
        </h2>


        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Highlights of my professional journey, technical expertise,
          certifications, and accomplishments.
        </p>



        {/* Cards */}

     {/* Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

  {achievements.map((item, index) => (

    <div
      key={item.id}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-primary/10
      bg-gradient-to-b
      from-card
      to-primary/5
      p-6
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-3
      transition-all
      duration-500
      "
    >

      {/* Glow Effect */}

      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        bg-primary/20
        rounded-full
        blur-3xl
        group-hover:bg-primary/40
        transition
        "
      />


      {/* Number */}

      <div
        className="
        absolute
        top-5
        right-5
        text-5xl
        font-bold
        text-primary/10
        "
      >
        0{index + 1}
      </div>



      {/* Icon */}

      <div
        className="
        relative
        w-16
        h-16
        rounded-2xl
        bg-primary/10
        flex
        items-center
        justify-center
        mb-6
        group-hover:bg-primary
        group-hover:text-white
        transition-all
        duration-300
        "
      >
        {item.icon}
      </div>



      {/* Title */}

      <h3
        className="
        relative
        text-lg
        font-bold
        leading-6
        mb-4
        group-hover:text-primary
        transition
        "
      >
        {item.title}
      </h3>



      {/* Description */}

      <p
        className="
        relative
        text-sm
        text-muted-foreground
        leading-6
        "
      >
        {item.description}
      </p>


      {/* Bottom Line */}

      <div
        className="
        mt-6
        h-1
        w-0
        bg-primary
        rounded-full
        group-hover:w-full
        transition-all
        duration-500
        "
      />

    </div>

  ))}

</div>
      </div>

    </section>
  );
};