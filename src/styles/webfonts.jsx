import { css, Global } from '@emotion/react';

export default function WebFonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-style: normal;
          font-named-instance: 'Regular';
          src: url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-roman.var.woff2')
              format('woff2 supports variations(gvar)'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-roman.var.woff2')
              format('woff2-variations'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-roman.var.woff2')
              format('woff2');
        }

        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-style: italic;
          font-named-instance: 'Italic';
          src: url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-italic.var.woff2')
              format('woff2 supports variations(gvar)'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-italic.var.woff2')
              format('woff2-variations'),
            url('https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/Inter (web)/Inter-italic.var.woff2')
              format('woff2');
        }

        /* General Sans */
        @font-face {
          font-family: 'General Sans';
          src: url('https://cdn.fontshare.com/wf/LFYE2Z5GWZRNCXEMQAET3AOP7BCXJP57/RHY36JYKH2FHHULNA2YGU6K3BYA67FLY/MLQGF4KMISJIM3N6257KEVNYR2T6RYQE.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/LFYE2Z5GWZRNCXEMQAET3AOP7BCXJP57/RHY36JYKH2FHHULNA2YGU6K3BYA67FLY/MLQGF4KMISJIM3N6257KEVNYR2T6RYQE.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/LFYE2Z5GWZRNCXEMQAET3AOP7BCXJP57/RHY36JYKH2FHHULNA2YGU6K3BYA67FLY/MLQGF4KMISJIM3N6257KEVNYR2T6RYQE.ttf')
              format('truetype');
          font-weight: 200 700;
          font-display: swap;
          font-style: normal;
        }
        /* Satoshi */
        @font-face {
          font-family: 'Satoshi';
          src: url('https://cdn.fontshare.com/wf/UXSC7LTLLER4K2YCD7UDS3BZ23JCE4GH/SGXYBKSIESOFDEYIIO7I7RSWHL6IB66E/KFUYUUTMTE2OK2ZTBRKR2DM2Z2ZQFW2Y.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/UXSC7LTLLER4K2YCD7UDS3BZ23JCE4GH/SGXYBKSIESOFDEYIIO7I7RSWHL6IB66E/KFUYUUTMTE2OK2ZTBRKR2DM2Z2ZQFW2Y.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/UXSC7LTLLER4K2YCD7UDS3BZ23JCE4GH/SGXYBKSIESOFDEYIIO7I7RSWHL6IB66E/KFUYUUTMTE2OK2ZTBRKR2DM2Z2ZQFW2Y.ttf')
              format('truetype');
          font-weight: 300 900;
          font-display: swap;
          font-style: normal;
        }
        /* Clash Display */
        @font-face {
          font-family: 'Clash Display';
          src: url('https://cdn.fontshare.com/wf/DK2FOA46SRWJ5HXWWU5TK4N4CMHYD236/FPEAXZZSH5L2K5MTJFRIWD2MC32IJMN3/THOOS4VOCKT7H2XEB27NQDYM2NYS4AAR.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/DK2FOA46SRWJ5HXWWU5TK4N4CMHYD236/FPEAXZZSH5L2K5MTJFRIWD2MC32IJMN3/THOOS4VOCKT7H2XEB27NQDYM2NYS4AAR.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/DK2FOA46SRWJ5HXWWU5TK4N4CMHYD236/FPEAXZZSH5L2K5MTJFRIWD2MC32IJMN3/THOOS4VOCKT7H2XEB27NQDYM2NYS4AAR.ttf')
              format('truetype');
          font-weight: 200 700;
          font-display: swap;
          font-style: normal;
        }
        /* Gambetta */
        @font-face {
          font-family: 'Gambetta';
          src: url('https://cdn.fontshare.com/wf/IO64MOLOOW3MADNYW6372BX75AZHIGN7/BPOP2KDXPAXVGL7O2Q3WBD4XGWZPXOMI/LVE332CEMOULXQOAOM26OE4B4AU5SXIA.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/IO64MOLOOW3MADNYW6372BX75AZHIGN7/BPOP2KDXPAXVGL7O2Q3WBD4XGWZPXOMI/LVE332CEMOULXQOAOM26OE4B4AU5SXIA.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/IO64MOLOOW3MADNYW6372BX75AZHIGN7/BPOP2KDXPAXVGL7O2Q3WBD4XGWZPXOMI/LVE332CEMOULXQOAOM26OE4B4AU5SXIA.ttf')
              format('truetype');
          font-weight: 300 700;
          font-display: swap;
          font-style: normal;
        }
        @font-face {
          font-family: 'Gambetta';
          src: url('https://cdn.fontshare.com/wf/E3LPDDDRPZANOIRMC52GRAU7MZLET6MY/2F7RTK6VFXBIKVLYF7JQGJXACH3PSEO5/3RU4FY47F5DQ2S7QCECPGDGACNAH27WX.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/E3LPDDDRPZANOIRMC52GRAU7MZLET6MY/2F7RTK6VFXBIKVLYF7JQGJXACH3PSEO5/3RU4FY47F5DQ2S7QCECPGDGACNAH27WX.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/E3LPDDDRPZANOIRMC52GRAU7MZLET6MY/2F7RTK6VFXBIKVLYF7JQGJXACH3PSEO5/3RU4FY47F5DQ2S7QCECPGDGACNAH27WX.ttf')
              format('truetype');
          font-weight: 300 700;
          font-display: swap;
          font-style: italic;
        }
        /* Clash Grotesk */
        @font-face {
          font-family: 'Clash Grotesk';
          src: url('https://cdn.fontshare.com/wf/5TRO2J3HJNIQODLQ4CTSMGSLAWSE5YUY/GHXENXHZCDIOE5E73364PNNASRNO3JVW/GLZTRU2GIKPV5HYT3E6HDLWOXAWPNZDV.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/5TRO2J3HJNIQODLQ4CTSMGSLAWSE5YUY/GHXENXHZCDIOE5E73364PNNASRNO3JVW/GLZTRU2GIKPV5HYT3E6HDLWOXAWPNZDV.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/5TRO2J3HJNIQODLQ4CTSMGSLAWSE5YUY/GHXENXHZCDIOE5E73364PNNASRNO3JVW/GLZTRU2GIKPV5HYT3E6HDLWOXAWPNZDV.ttf')
              format('truetype');
          font-weight: 200 700;
          font-display: swap;
          font-style: normal;
        }
        /* Bespoke Serif */
        @font-face {
          font-family: 'Bespoke Serif';
          src: url('https://cdn.fontshare.com/wf/LQBL2BKOVSXOIPKVAC7Y76PA7GZ2HXBD/IQ53PCOMUF4S5V5TKVBLDGYVOV4Y73B5/QQHHDRSCXVWQMZ6WGM4VTWROGNY4EHQH.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/LQBL2BKOVSXOIPKVAC7Y76PA7GZ2HXBD/IQ53PCOMUF4S5V5TKVBLDGYVOV4Y73B5/QQHHDRSCXVWQMZ6WGM4VTWROGNY4EHQH.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/LQBL2BKOVSXOIPKVAC7Y76PA7GZ2HXBD/IQ53PCOMUF4S5V5TKVBLDGYVOV4Y73B5/QQHHDRSCXVWQMZ6WGM4VTWROGNY4EHQH.ttf')
              format('truetype');
          font-weight: 300 800;
          font-display: swap;
          font-style: normal;
        }
        @font-face {
          font-family: 'Bespoke Serif';
          src: url('https://cdn.fontshare.com/wf/HC7WW3IHSQE42LDAISTJUDIMC6WXDYWA/6ELDKO7AR6O37OXX45LVNY4CRXMHJ4SA/OCG4B3AYFIJYARETUDDBO7AIYCYIBCJD.woff2')
              format('woff2'),
            url('https://cdn.fontshare.com/wf/HC7WW3IHSQE42LDAISTJUDIMC6WXDYWA/6ELDKO7AR6O37OXX45LVNY4CRXMHJ4SA/OCG4B3AYFIJYARETUDDBO7AIYCYIBCJD.woff')
              format('woff'),
            url('https://cdn.fontshare.com/wf/HC7WW3IHSQE42LDAISTJUDIMC6WXDYWA/6ELDKO7AR6O37OXX45LVNY4CRXMHJ4SA/OCG4B3AYFIJYARETUDDBO7AIYCYIBCJD.ttf')
              format('truetype');
          font-weight: 300 800;
          font-display: swap;
          font-style: italic;
        }
      `}
    />
  );
}
