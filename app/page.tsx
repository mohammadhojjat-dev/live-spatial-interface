import Image from "next/image";
import heroImage from '@/public/images/hero.jpg'
import gridOverlay from '@/public/images/grid.png'

export default function Home() {
  return (

        <div className="container">
          <section className="hero">
            <div className="hero-img">
              <Image src={heroImage} alt={'hero-image'}/>
            </div>
              <div className="hero-mask"></div>
              <div className="hero-grid-overlay">
                  <Image src={gridOverlay} alt={'grid-overlay'}/>
              </div>
              <div className="marker marker-1" >
                  <span className="marker-icon"></span>
                  <p className="marker-label">Anchor Field</p>
              </div>


              <div className="marker marker-2" >
                  <span className="marker-icon"></span>
                  <p className="marker-label">Drift Field</p>
              </div>

              <div className="hero-content">
                  <div className="hero-content-block">
                      <div className="hero-content-copy">
                          <h2>Location Framework</h2>
                      </div>
                  </div>
                  <div className="hero-content-block">
                      <div className="hero-content-copy">
                          <h2>Coordinate Mapping</h2>
                          <p>
                              Terrain data is interpreted through
                              directional vectors.
                              Movement responds to relative
                              position rather than absolute
                              distance.
                          </p>
                      </div>
                  </div>
                  <div className="hero-content-block">
                      <div className="hero-content-copy">
                          <h2>Active Locations</h2>
                          <p>
                              Key points are indexed within the
                              field. Each location
                              functions as a reference for spatial
                              alignment and transition
                          </p>
                      </div>
                  </div>
                  <div className="hero-content-block">
                      <div className="hero-content-copy">
                          <h2>Special Center</h2>
                          <p>
                              The system converges toward a
                              balanced focal region. Motion
                              decelerates as positional variance
                              reaches equilibrium.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="hero-scroll-progress-bar">

              </div>
          </section>
          <section className="outro">
              <p>The system has reached its final spatial state.</p>


          </section>

        </div>

  );
}
